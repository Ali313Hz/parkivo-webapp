"use client"

import { useState } from "react"
import { Camera, CreditCard, Edit, Key, Mail, Phone, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import React from "react"

export function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen w-full bg-background">
                <DashboardSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Mi Perfil</h1>
                            </div>
                            <div>
                                {isEditing ? (
                                    <Button onClick={() => setIsEditing(false)}>
                                        <Save className="h-4 w-4 mr-2" />
                                        Guardar cambios
                                    </Button>
                                ) : (
                                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Editar perfil
                                    </Button>
                                )}
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-4 md:p-6">
                        <div className="mx-auto max-w-4xl space-y-8">
                            {/* Profile Header */}
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                <div className="relative">
                                    <Avatar className="h-24 w-24">
                                        <AvatarImage src="/placeholder-user.jpg" alt="Juan Díaz" />
                                        <AvatarFallback className="text-2xl">JD</AvatarFallback>
                                    </Avatar>
                                    {isEditing && (
                                        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 cursor-pointer">
                                            <Camera className="h-4 w-4" />
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2 text-center md:text-left">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-bold">Juan Díaz</h2>
                                        <p className="text-muted-foreground">Usuario desde Enero 2025</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        <Badge variant="outline" className="bg-blue-50">
                                            Plan Básico
                                        </Badge>
                                        <Badge variant="outline" className="bg-green-50">
                                            2 Plazas Activas
                                        </Badge>
                                        <Badge variant="outline" className="bg-yellow-50">
                                            5 Reservas Completadas
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <Tabs defaultValue="personal" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
                                    <TabsTrigger value="personal">Información Personal</TabsTrigger>
                                    <TabsTrigger value="security">Seguridad</TabsTrigger>
                                    <TabsTrigger value="payment">Métodos de Pago</TabsTrigger>
                                </TabsList>

                                {/* Personal Information Tab */}
                                <TabsContent value="personal" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Información Personal</CardTitle>
                                            <CardDescription>Actualiza tu información de contacto y personal</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">Nombre</Label>
                                                    <div className="flex items-center gap-2">
                                                        <User className="h-4 w-4 text-muted-foreground" />
                                                        <Input id="firstName" defaultValue="Juan" readOnly={!isEditing} />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Apellidos</Label>
                                                    <div className="flex items-center gap-2">
                                                        <User className="h-4 w-4 text-muted-foreground" />
                                                        <Input id="lastName" defaultValue="Díaz" readOnly={!isEditing} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Correo electrónico</Label>
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                                        <Input id="email" defaultValue="juan@ejemplo.com" readOnly={!isEditing} />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Teléfono</Label>
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                                        <Input id="phone" defaultValue="+34 612 345 678" readOnly={!isEditing} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="address">Dirección</Label>
                                                <Input id="address" defaultValue="Calle Principal 123, 28001 Madrid" readOnly={!isEditing} />
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-3">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">Ciudad</Label>
                                                    <Input id="city" defaultValue="Madrid" readOnly={!isEditing} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="postalCode">Código Postal</Label>
                                                    <Input id="postalCode" defaultValue="28001" readOnly={!isEditing} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="country">País</Label>
                                                    <Input id="country" defaultValue="España" readOnly={!isEditing} />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline">Cancelar</Button>
                                            <Button>Guardar cambios</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Preferencias de Notificaciones</CardTitle>
                                            <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Notificaciones por email</h4>
                                                        <p className="text-sm text-muted-foreground">Recibe actualizaciones sobre tus reservas</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Label htmlFor="email-notifications" className="sr-only">
                                                            Notificaciones por email
                                                        </Label>
                                                        <input
                                                            type="checkbox"
                                                            id="email-notifications"
                                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                            defaultChecked
                                                            disabled={!isEditing}
                                                        />
                                                    </div>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Notificaciones SMS</h4>
                                                        <p className="text-sm text-muted-foreground">Recibe alertas por SMS</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Label htmlFor="sms-notifications" className="sr-only">
                                                            Notificaciones SMS
                                                        </Label>
                                                        <input
                                                            type="checkbox"
                                                            id="sms-notifications"
                                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                            defaultChecked
                                                            disabled={!isEditing}
                                                        />
                                                    </div>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Notificaciones push</h4>
                                                        <p className="text-sm text-muted-foreground">Recibe notificaciones en la app</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Label htmlFor="push-notifications" className="sr-only">
                                                            Notificaciones push
                                                        </Label>
                                                        <input
                                                            type="checkbox"
                                                            id="push-notifications"
                                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                            defaultChecked
                                                            disabled={!isEditing}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Security Tab */}
                                <TabsContent value="security" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Cambiar Contraseña</CardTitle>
                                            <CardDescription>Actualiza tu contraseña para mantener tu cuenta segura</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="current-password">Contraseña actual</Label>
                                                <div className="flex items-center gap-2">
                                                    <Key className="h-4 w-4 text-muted-foreground" />
                                                    <Input id="current-password" type="password" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="new-password">Nueva contraseña</Label>
                                                <div className="flex items-center gap-2">
                                                    <Key className="h-4 w-4 text-muted-foreground" />
                                                    <Input id="new-password" type="password" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                                                <div className="flex items-center gap-2">
                                                    <Key className="h-4 w-4 text-muted-foreground" />
                                                    <Input id="confirm-password" type="password" />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Actualizar contraseña</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sesiones Activas</CardTitle>
                                            <CardDescription>Gestiona tus sesiones activas en diferentes dispositivos</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-blue-100 p-2 rounded-full">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="h-5 w-5 text-blue-600"
                                                            >
                                                                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                                                                <path d="M12 18h.01" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium">iPhone 13 Pro</h4>
                                                            <p className="text-sm text-muted-foreground">Madrid, España • Activo ahora</p>
                                                        </div>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        Este dispositivo
                                                    </Button>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-blue-100 p-2 rounded-full">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="h-5 w-5 text-blue-600"
                                                            >
                                                                <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
                                                                <line x1="8" x2="16" y1="21" y2="21" />
                                                                <line x1="12" x2="12" y1="17" y2="21" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium">MacBook Pro</h4>
                                                            <p className="text-sm text-muted-foreground">Madrid, España • Hace 2 días</p>
                                                        </div>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        Cerrar sesión
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Payment Methods Tab */}
                                <TabsContent value="payment" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Métodos de Pago</CardTitle>
                                            <CardDescription>Gestiona tus tarjetas y métodos de pago</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-blue-100 p-2 rounded-full">
                                                            <CreditCard className="h-5 w-5 text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium">•••• •••• •••• 4242</h4>
                                                            <p className="text-sm text-muted-foreground">Visa • Expira 04/2026</p>
                                                        </div>
                                                    </div>
                                                    <Badge>Predeterminada</Badge>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-blue-100 p-2 rounded-full">
                                                            <CreditCard className="h-5 w-5 text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium">•••• •••• •••• 5555</h4>
                                                            <p className="text-sm text-muted-foreground">Mastercard • Expira 08/2025</p>
                                                        </div>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        Establecer como predeterminada
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Añadir nuevo método de pago</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Historial de Facturación</CardTitle>
                                            <CardDescription>Revisa tus facturas y pagos anteriores</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Plan Básico - Abril 2025</h4>
                                                        <p className="text-sm text-muted-foreground">10 Abr 2025</p>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="font-medium">€85.00</span>
                                                        <Button variant="outline" size="sm">
                                                            Ver factura
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Plan Básico - Marzo 2025</h4>
                                                        <p className="text-sm text-muted-foreground">10 Mar 2025</p>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="font-medium">€85.00</span>
                                                        <Button variant="outline" size="sm">
                                                            Ver factura
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Separator />
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium">Plan Básico - Febrero 2025</h4>
                                                        <p className="text-sm text-muted-foreground">10 Feb 2025</p>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="font-medium">€85.00</span>
                                                        <Button variant="outline" size="sm">
                                                            Ver factura
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}
