'use client'
import { Button } from "@/components/ui/button"
import { Activity, LucideIcon, Monitor, CircleCheck, ChartNoAxesColumn, } from "lucide-react"
import { MoreHorizontalIcon } from "lucide-react"
import {  DropdownMenu,  DropdownMenuContent,  DropdownMenuItem,  DropdownMenuSeparator,  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Table,  TableBody, TableCell, TableHead,  TableHeader, TableRow,} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"



interface StatsCartInter {
    header: string
    title: string
    icon: LucideIcon
    additionally: string
    Bgicon: string
    color: string
}

const statscart: StatsCartInter[] = [
    {header: 'Total Monitors', title: '2', icon: Monitor, additionally: '', Bgicon: 'bg-[#09231f]', color: '#42a35e'},
    {header: 'All system', title: 'Operational', icon: CircleCheck, additionally: '0% uptime', Bgicon: 'bg-[#09231f]', color: '#42a35e'},
    {header: 'Response True', title: '0ms', icon: Activity, additionally: 'Average', Bgicon: 'bg-[#15142e]', color: '#ac6ae9'},
    {header: 'Uptime (24h)', title: '0%', icon: ChartNoAxesColumn, additionally: 'All goods', Bgicon: 'bg-[#0d1838]', color: '#4b82f1'}
]


interface StatsCartTable {
  namesite: string
  bottom_name_site: string
  url: string
  status: 'UP' | 'Down'
  responcetime: string
  uptime: string
}

const StatsTable: StatsCartTable[] = [
  {namesite: 'Lafword', bottom_name_site: 'site by Lafword', url: 'https://lafword.com', status: 'UP', responcetime: '29ms', uptime: '72%'},
  {namesite: 'Zanthera', bottom_name_site: 'site by Zanthera', url: 'https://Zanthera.com', status: 'UP', responcetime: '19ms', uptime: '40%'},

]


export default function Home() {
    return (
        <div className="flex flex-col ml-7 mr-7 mt-4 gap-10">
            {/* header dashboard */}
            <div className="flex justify-between content-center">
                {/* title dashboard */}
                <div className="flex flex-col">
                    <h1 className="text-[25px]">Dashboard</h1>
                    <p className="text-[13px]">Overview of your monitors</p>
                </div>
                {/* button "+ add monitor" */}
                <Button variant='secondary' size={'lg'} className="pl-5 pr-5 pt-5 pb-5 bg-[#54c167] hover:bg-[#54c167] hover:shadow-sm hover:shadow-green-500">+ Add Monitor</Button>
            </div>
            <div className="flex justify-between">
                {/* stats cart */}
                {statscart.map(({header, title, icon: Icon, additionally, Bgicon, color}) => (
                    <div key={header} className="flex justify-between content-center bg-[#080e1e] p-7 border-2 border-[#0e1625] rounded-lg w-93 h-40">
                        <div className="flex flex-col justify-between">
                            <p className="text-[18px]">{header}</p>
                            <h1 className="text-[22px]">{title}</h1>
                            <p className="text-[15px]">{additionally}</p>
                        </div>
                        <Icon color={color} size={65} className={`${Bgicon} p-3 rounded-lg`}/>
                    </div>
                ))}
            </div>
            <div className="flex flex-col border-2 border-[#0e1625] rounded-lg bg-[#080e1e]">
                <div className="p-3 border-b-2 border-[#0e1625]">
                  <h1 className="mt-5 ml-5 mr-5">Monitors</h1>
                </div>
                <div className="pb-5 pl-5 pr-5">
                    {/* stats */}
                    <Table className="bg-[#020916] rounded-lg">
                      {/* header stats monitor */}
                      <TableHeader className="bg-[#0e1625] rounded-t-lg">
                        <TableRow>
                          <TableHead className="text-[#aeb3b9]">Name</TableHead>
                          <TableHead className="text-[#aeb3b9]">URL</TableHead>
                          <TableHead className="text-[#aeb3b9]">Status</TableHead>
                          <TableHead className="text-[#aeb3b9]">Response Time</TableHead>
                          <TableHead className="text-[#aeb3b9]">Uptime (24h)</TableHead>
                          <TableHead className="text-right text-[#aeb3b9]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      {/* Sites */}
                      {StatsTable.map(({namesite, bottom_name_site, url, status, uptime, responcetime}) => (
                        <TableBody key={namesite}>
                          <TableRow>
                            <TableCell className="font-bold text-[17px]">{namesite}</TableCell>
                            <TableCell className="text-[#aeb3b9]">{url}</TableCell>
                            <TableCell className="flex"><div className="bg-[#09231f] pl-3 pr-3 pt-2 pb-2 rounded-sm text-[#42a35e]">{status}</div></TableCell>
                            <TableCell className="text-[#aeb3b9]">{responcetime}</TableCell>
                            <TableCell className="">
                              <div className="flex flex-col justify-between">
                                <span>{uptime}</span>
                                <Progress className="h-1.5" value={parseFloat(uptime)}></Progress>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon /><span className="sr-only">Open menu</span></Button>} />
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem variant="destructive">
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                      </TableBody>
                      ))}
                      
                    </Table>
                </div>
            </div>
        </div>
    )
}