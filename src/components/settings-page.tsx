"use client"

import { useState } from "react"
import { Bell, Moon, Shield, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import React from "react"

export function SettingsPage() {
    const { setTheme, theme } = useTheme()
    const [language, setLanguage] = useState("es")

    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen w-full bg-background">
                <DashboardSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Configuración</h1>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-4 md:p-6">
                        <div className="mx-auto max-w-4xl space-y-8">
                            <Tabs defaultValue="general" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
                                    <TabsTrigger value="general">General</TabsTrigger>
                                    <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                                    <TabsTrigger value="privacy">Privacidad</TabsTrigger>
                                </TabsList>

                                {/* General Settings Tab */}
                                <TabsContent value="general" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Apariencia</CardTitle>
                                            <CardDescription>Personaliza la apariencia de la aplicación</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="space-y-2">
                                                <Label>Tema</Label>
                                                <RadioGroup defaultValue={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
                                                    <div>
                                                        <RadioGroupItem value="light" id="light" className="sr-only peer" />
                                                        <Label
                                                            htmlFor="light"
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            <Sun className="mb-3 h-6 w-6" />
                                                            Claro
                                                        </Label>
                                                    </div>
                                                    <div>
                                                        <RadioGroupItem value="dark" id="dark" className="sr-only peer" />
                                                        <Label
                                                            htmlFor="dark"
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            <Moon className="mb-3 h-6 w-6" />
                                                            Oscuro
                                                        </Label>
                                                    </div>
                                                    <div>
                                                        <RadioGroupItem value="system" id="system" className="sr-only peer" />
                                                        <Label
                                                            htmlFor="system"
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            <svg
                                                                className="mb-3 h-6 w-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                                                <line x1="8" x2="16" y1="21" y2="21" />
                                                                <line x1="12" x2="12" y1="17" y2="21" />
                                                            </svg>
                                                            Sistema
                                                        </Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Idioma y Región</CardTitle>
                                            <CardDescription>Configura el idioma y la región de la aplicación</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="language">Idioma</Label>
                                                <Select value={language} onValueChange={setLanguage}>
                                                    <SelectTrigger id="language" className="w-full">
                                                        <SelectValue placeholder="Selecciona un idioma" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="es">Español</SelectItem>
                                                        <SelectItem value="en">English</SelectItem>
                                                        <SelectItem value="ca">Català</SelectItem>
                                                        <SelectItem value="eu">Euskara</SelectItem>
                                                        <SelectItem value="gl">Galego</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="timezone">Zona horaria</Label>
                                                <Select defaultValue="europe-madrid">
                                                    <SelectTrigger id="timezone" className="w-full">
                                                        <SelectValue placeholder="Selecciona una zona horaria" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="europe-madrid">(GMT+01:00) Madrid</SelectItem>
                                                        <SelectItem value="europe-london">(GMT+00:00) Londres</SelectItem>
                                                        <SelectItem value="america-new_york">(GMT-05:00) Nueva York</SelectItem>
                                                        <SelectItem value="america-los_angeles">(GMT-08:00) Los Ángeles</SelectItem>
                                                        <SelectItem value="asia-tokyo">(GMT+09:00) Tokio</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="date-format">Formato de fecha</Label>
                                                <Select defaultValue="dd-mm-yyyy">
                                                    <SelectTrigger id="date-format" className="w-full">
                                                        <SelectValue placeholder="Selecciona un formato de fecha" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="dd-mm-yyyy">DD/MM/AAAA</SelectItem>
                                                        <SelectItem value="mm-dd-yyyy">MM/DD/AAAA</SelectItem>
                                                        <SelectItem value="yyyy-mm-dd">AAAA/MM/DD</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Guardar preferencias</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Accesibilidad</CardTitle>
                                            <CardDescription>Configura opciones de accesibilidad</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="reduce-motion">Reducir movimiento</Label>
                                                    <p className="text-sm text-muted-foreground">Minimiza las animaciones</p>
                                                </div>
                                                <Switch id="reduce-motion" />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="high-contrast">Alto contraste</Label>
                                                    <p className="text-sm text-muted-foreground">Aumenta el contraste de colores</p>
                                                </div>
                                                <Switch id="high-contrast" />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="text-size">Tamaño de texto grande</Label>
                                                    <p className="text-sm text-muted-foreground">Aumenta el tamaño del texto</p>
                                                </div>
                                                <Switch id="text-size" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Notifications Tab */}
                                <TabsContent value="notifications" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Preferencias de Notificaciones</CardTitle>
                                            <CardDescription>Configura cómo y cuándo recibir notificaciones</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-4">
                                                <h3 className="font-medium flex items-center gap-2">
                                                    <Bell className="h-4 w-4" /> Notificaciones de Reservas
                                                </h3>
                                                <div className="ml-6 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="new-booking">Nuevas reservas</Label>
                                                            <p className="text-sm text-muted-foreground">Cuando se confirma una nueva reserva</p>
                                                        </div>
                                                        <Switch id="new-booking" defaultChecked />
                                                    </div>
                                                    <Separator />
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="booking-reminder">Recordatorios</Label>
                                                            <p className="text-sm text-muted-foreground">24 horas antes de tu reserva</p>
                                                        </div>
                                                        <Switch id="booking-reminder" defaultChecked />
                                                    </div>
                                                    <Separator />
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="booking-changes">Cambios en reservas</Label>
                                                            <p className="text-sm text-muted-foreground">Cuando hay cambios en tus reservas</p>
                                                        </div>
                                                        <Switch id="booking-changes" defaultChecked />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <h3 className="font-medium flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-4 w-4"
                                                    >
                                                        <path d="M12 2v2" />
                                                        <path d="M12 20v2" />
                                                        <path d="m4.93 4.93 1.41 1.41" />
                                                        <path d="m17.66 17.66 1.41 1.41" />
                                                        <path d="M2 12h2" />
                                                        <path d="M20 12h2" />
                                                        <path d="m6.34 17.66-1.41 1.41" />
                                                        <path d="m19.07 4.93-1.41 1.41" />
                                                    </svg>{" "}
                                                    Notificaciones del Sistema
                                                </h3>
                                                <div className="ml-6 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="system-updates">Actualizaciones del sistema</Label>
                                                            <p className="text-sm text-muted-foreground">Nuevas funcionalidades y mejoras</p>
                                                        </div>
                                                        <Switch id="system-updates" defaultChecked />
                                                    </div>
                                                    <Separator />
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="maintenance">Mantenimiento programado</Label>
                                                            <p className="text-sm text-muted-foreground">Avisos de mantenimiento del sistema</p>
                                                        </div>
                                                        <Switch id="maintenance" defaultChecked />
                                                    </div>
                                                    <Separator />
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-0.5">
                                                            <Label htmlFor="marketing">Comunicaciones de marketing</Label>
                                                            <p className="text-sm text-muted-foreground">Ofertas y promociones</p>
                                                        </div>
                                                        <Switch id="marketing" />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Guardar preferencias</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Canales de Notificación</CardTitle>
                                            <CardDescription>Elige cómo quieres recibir tus notificaciones</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="email-notifications">Correo electrónico</Label>
                                                    <p className="text-sm text-muted-foreground">Recibe notificaciones por email</p>
                                                </div>
                                                <Switch id="email-notifications" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="sms-notifications">SMS</Label>
                                                    <p className="text-sm text-muted-foreground">Recibe notificaciones por SMS</p>
                                                </div>
                                                <Switch id="sms-notifications" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="push-notifications">Notificaciones push</Label>
                                                    <p className="text-sm text-muted-foreground">Recibe notificaciones en la app móvil</p>
                                                </div>
                                                <Switch id="push-notifications" defaultChecked />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Guardar preferencias</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                {/* Privacy Tab */}
                                <TabsContent value="privacy" className="space-y-6 mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Privacidad y Seguridad</CardTitle>
                                            <CardDescription>Gestiona tus preferencias de privacidad</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="location-tracking" className="flex items-center gap-2">
                                                        <Shield className="h-4 w-4" /> Compartir ubicación
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">Permite que la app acceda a tu ubicación</p>
                                                </div>
                                                <Switch id="location-tracking" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="data-collection" className="flex items-center gap-2">
                                                        <Shield className="h-4 w-4" /> Recopilación de datos de uso
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">Ayúdanos a mejorar con datos anónimos de uso</p>
                                                </div>
                                                <Switch id="data-collection" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="third-party-sharing" className="flex items-center gap-2">
                                                        <Shield className="h-4 w-4" /> Compartir con terceros
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">Permitir compartir datos con socios</p>
                                                </div>
                                                <Switch id="third-party-sharing" />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Gestión de Datos</CardTitle>
                                            <CardDescription>Controla tus datos personales</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="space-y-2">
                                                <h3 className="font-medium">Exportar datos</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Descarga una copia de tus datos personales y actividad en la plataforma
                                                </p>
                                                <Button variant="outline" className="mt-2">
                                                    Solicitar exportación
                                                </Button>
                                            </div>
                                            <Separator />
                                            <div className="space-y-2">
                                                <h3 className="font-medium">Eliminar cuenta</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Elimina permanentemente tu cuenta y todos tus datos de nuestra plataforma
                                                </p>
                                                <Button variant="destructive" className="mt-2">
                                                    Eliminar cuenta
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Cookies</CardTitle>
                                            <CardDescription>Gestiona las preferencias de cookies</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="essential-cookies">Cookies esenciales</Label>
                                                    <p className="text-sm text-muted-foreground">Necesarias para el funcionamiento del sitio</p>
                                                </div>
                                                <Switch id="essential-cookies" defaultChecked disabled />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="functional-cookies">Cookies funcionales</Label>
                                                    <p className="text-sm text-muted-foreground">Mejoran la funcionalidad del sitio</p>
                                                </div>
                                                <Switch id="functional-cookies" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="analytics-cookies">Cookies analíticas</Label>
                                                    <p className="text-sm text-muted-foreground">Nos ayudan a entender cómo usas el sitio</p>
                                                </div>
                                                <Switch id="analytics-cookies" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label htmlFor="marketing-cookies">Cookies de marketing</Label>
                                                    <p className="text-sm text-muted-foreground">Utilizadas para publicidad personalizada</p>
                                                </div>
                                                <Switch id="marketing-cookies" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Guardar preferencias</Button>
                                        </CardFooter>
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
