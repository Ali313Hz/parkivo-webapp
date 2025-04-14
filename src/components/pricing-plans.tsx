"use client"

import { Check, HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import React from "react"

export function PricingPlans() {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen w-full bg-background">
                <DashboardSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Planes de Precios</h1>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-4 md:p-6">
                        <div className="mx-auto max-w-6xl space-y-8">
                            <div className="text-center space-y-3">
                                <h2 className="text-3xl font-bold">Elige el plan perfecto para ti</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Ofrecemos diferentes planes adaptados a tus necesidades de estacionamiento, ya sea para uso ocasional
                                    o regular.
                                </p>
                            </div>

                            <Tabs defaultValue="mensual" className="w-full">
                                <div className="flex justify-center mb-8">
                                    <TabsList>
                                        <TabsTrigger value="mensual">Facturación Mensual</TabsTrigger>
                                        <TabsTrigger value="anual">Facturación Anual</TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="mensual" className="space-y-8">
                                    <div className="grid gap-6 md:grid-cols-3">
                                        {/* Plan Básico */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle>Básico</CardTitle>
                                                <CardDescription>Para usuarios ocasionales</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€85</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>1 plaza de parking fija</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>5 reservas por hora al mes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full">Tu plan actual</Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Plan Estándar */}
                                        <Card className="flex flex-col border-blue-600 relative">
                                            <div className="absolute top-0 right-0 -translate-y-1/2">
                                                <Badge className="bg-blue-600">Más popular</Badge>
                                            </div>
                                            <CardHeader>
                                                <CardTitle>Estándar</CardTitle>
                                                <CardDescription>Para usuarios regulares</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€125</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>2 plazas de parking fijas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>15 reservas por hora al mes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant="outline">
                                                    Actualizar plan
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Plan Premium */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle>Premium</CardTitle>
                                                <CardDescription>Para usuarios intensivos</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€199</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>3 plazas de parking fijas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas ilimitadas por hora</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant="outline">
                                                    Actualizar plan
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </TabsContent>

                                <TabsContent value="anual" className="space-y-8">
                                    <div className="grid gap-6 md:grid-cols-3">
                                        {/* Plan Básico Anual */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle>Básico</CardTitle>
                                                <CardDescription>Para usuarios ocasionales</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€69</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                    <div className="text-sm text-green-600 font-medium mt-1">Ahorra €192 al año</div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>1 plaza de parking fija</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>5 reservas por hora al mes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant="outline">
                                                    Actualizar plan
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Plan Estándar Anual */}
                                        <Card className="flex flex-col border-blue-600 relative">
                                            <div className="absolute top-0 right-0 -translate-y-1/2">
                                                <Badge className="bg-blue-600">Más popular</Badge>
                                            </div>
                                            <CardHeader>
                                                <CardTitle>Estándar</CardTitle>
                                                <CardDescription>Para usuarios regulares</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€99</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                    <div className="text-sm text-green-600 font-medium mt-1">Ahorra €312 al año</div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>2 plazas de parking fijas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>15 reservas por hora al mes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant="outline">
                                                    Actualizar plan
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Plan Premium Anual */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle>Premium</CardTitle>
                                                <CardDescription>Para usuarios intensivos</CardDescription>
                                                <div className="mt-4">
                                                    <span className="text-3xl font-bold">€159</span>
                                                    <span className="text-muted-foreground ml-1">/mes</span>
                                                    <div className="text-sm text-green-600 font-medium mt-1">Ahorra €480 al año</div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>3 plazas de parking fijas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas ilimitadas por hora</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Acceso a la app móvil</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Reservas prioritarias</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>Soporte 24/7</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant="outline">
                                                    Actualizar plan
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </TabsContent>
                            </Tabs>

                            {/* Comparativa de planes */}
                            <div className="mt-16">
                                <h3 className="text-2xl font-bold text-center mb-8">Comparativa detallada de planes</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-4 px-4">Características</th>
                                            <th className="text-center py-4 px-4">Básico</th>
                                            <th className="text-center py-4 px-4">Estándar</th>
                                            <th className="text-center py-4 px-4">Premium</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="border-b">
                                            <td className="py-4 px-4 flex items-center">
                                                Plazas fijas
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="w-[200px]">
                                                                Número de plazas de parking que puedes alquilar de forma permanente.
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="text-center py-4 px-4">1</td>
                                            <td className="text-center py-4 px-4">2</td>
                                            <td className="text-center py-4 px-4">3</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4 flex items-center">
                                                Reservas por hora
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="w-[200px]">Número de reservas por horas que puedes hacer al mes.</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="text-center py-4 px-4">5 / mes</td>
                                            <td className="text-center py-4 px-4">15 / mes</td>
                                            <td className="text-center py-4 px-4">Ilimitadas</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4">Acceso app móvil</td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4">Reservas prioritarias</td>
                                            <td className="text-center py-4 px-4">
                                                <X className="h-5 w-5 text-red-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4">Soporte 24/7</td>
                                            <td className="text-center py-4 px-4">
                                                <X className="h-5 w-5 text-red-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <X className="h-5 w-5 text-red-500 mx-auto" />
                                            </td>
                                            <td className="text-center py-4 px-4">
                                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4">Cancelaciones gratuitas</td>
                                            <td className="text-center py-4 px-4">1 / mes</td>
                                            <td className="text-center py-4 px-4">3 / mes</td>
                                            <td className="text-center py-4 px-4">Ilimitadas</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-4">Invitados</td>
                                            <td className="text-center py-4 px-4">0</td>
                                            <td className="text-center py-4 px-4">1</td>
                                            <td className="text-center py-4 px-4">3</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="mt-16">
                                <h3 className="text-2xl font-bold text-center mb-8">Preguntas frecuentes</h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">¿Puedo cambiar de plan en cualquier momento?</h4>
                                        <p className="text-muted-foreground">
                                            Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán al inicio
                                            del siguiente ciclo de facturación.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">¿Qué son las reservas por hora?</h4>
                                        <p className="text-muted-foreground">
                                            Las reservas por hora te permiten reservar plazas de parking adicionales por periodos cortos,
                                            además de tus plazas fijas.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">¿Cómo funcionan las plazas fijas?</h4>
                                        <p className="text-muted-foreground">
                                            Las plazas fijas son espacios de parking que tienes reservados permanentemente durante la vigencia
                                            de tu suscripción.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">¿Qué incluye el soporte 24/7?</h4>
                                        <p className="text-muted-foreground">
                                            El soporte 24/7 te da acceso a nuestro equipo de atención al cliente en cualquier momento, todos
                                            los días de la semana, para resolver cualquier incidencia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}
