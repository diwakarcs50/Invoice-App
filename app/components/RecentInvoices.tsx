import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "../utils/db";
import { requireUser } from "../utils/hooks";
import { formatCurrency } from "../utils/formatCurrency";

async function getData(userId:string){
    const data = await prisma.invoice.findMany({
        where:{
            userId:userId

        },
        select:{
            id:true,
            clientName:true,
            clientEmail:true,
            total:true,
            currency:true
        },
        orderBy:{
            createdAt:"desc"
        },
        take:7,
    })
    return data
}
export async function RecentInvoices(){
    const session = await requireUser()
    const data = await getData(session.user?.id as string)
    return (
        <Card className="overflow-hidden w-full max-w-lg">
        <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center w-full gap-4 border-b last:border-b-0 pb-2"
                >
                  
                    <Avatar className="hidden sm:flex w-10 h-10 flex-shrink-0">
                        <AvatarFallback className="text-sm">{item.clientName.slice(0, 2)}</AvatarFallback>
                    </Avatar>
    
                 
                    <div className="flex flex-col flex-grow min-w-0">
                        <p className="text-sm font-medium truncate">{item.clientName}</p>
                        <p className="text-sm text-muted-foreground truncate">{item.clientEmail}</p>
                    </div>
    
                 
                    <div className="text-right font-medium whitespace-nowrap">
                        +{formatCurrency({
                            amount: item.total,
                            currency: item.currency as any,
                        })}
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
    
    )
}