"use client"

import { Car, Clock, MapPin, ParkingCircle, Search, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export function DashboardContent() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
        <SidebarTrigger />
        <div className="w-full flex items-center justify-between">
          <div className="hidden md:flex">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <form className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar plazas disponibles..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <Button>Nueva Reserva</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        {/* Dashboard Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mis Plazas</CardTitle>
              <ParkingCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Plazas alquiladas actualmente</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Reservas Activas</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Reserva en curso</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Próxima Reserva</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/04</div>
              <p className="text-xs text-muted-foreground">En 5 días</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Plan Actual</CardTitle>
              <Tag className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Básico</div>
              <p className="text-xs text-muted-foreground">€85/mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="plazas" className="mt-6">
          <TabsList>
            <TabsTrigger value="plazas">Mis Plazas</TabsTrigger>
            <TabsTrigger value="reservas">Mis Reservas</TabsTrigger>
            <TabsTrigger value="mapa">Mapa</TabsTrigger>
          </TabsList>

          {/* Mis Plazas Tab */}
          <TabsContent value="plazas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Mis Plazas Alquiladas</CardTitle>
                <CardDescription>Plazas de parking que tienes actualmente alquiladas</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plaza</TableHead>
                      <TableHead>Ubicación</TableHead>
                      <TableHead>Desde</TableHead>
                      <TableHead>Hasta</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Precio/mes</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">A-15</TableCell>
                      <TableCell>Parking Central</TableCell>
                      <TableCell>01/03/2025</TableCell>
                      <TableCell>01/06/2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Activa</Badge>
                      </TableCell>
                      <TableCell>€45.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">B-22</TableCell>
                      <TableCell>Parking Norte</TableCell>
                      <TableCell>15/02/2025</TableCell>
                      <TableCell>15/05/2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Activa</Badge>
                      </TableCell>
                      <TableCell>€40.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mis Reservas Tab */}
          <TabsContent value="reservas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Mis Reservas</CardTitle>
                <CardDescription>Historial de tus reservas y próximas reservas</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Plaza</TableHead>
                      <TableHead>Fecha Inicio</TableHead>
                      <TableHead>Fecha Fin</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Importe</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#1234</TableCell>
                      <TableCell>C-07</TableCell>
                      <TableCell>10/04/2025 09:00</TableCell>
                      <TableCell>10/04/2025 18:00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Activa</Badge>
                      </TableCell>
                      <TableCell>€15.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Ver QR
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#1233</TableCell>
                      <TableCell>A-03</TableCell>
                      <TableCell>15/04/2025 08:30</TableCell>
                      <TableCell>15/04/2025 17:30</TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-500">Pendiente</Badge>
                      </TableCell>
                      <TableCell>€12.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Cancelar
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#1232</TableCell>
                      <TableCell>B-11</TableCell>
                      <TableCell>05/04/2025 14:00</TableCell>
                      <TableCell>05/04/2025 20:00</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500">Completada</Badge>
                      </TableCell>
                      <TableCell>€8.50</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Factura
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mapa Tab */}
          <TabsContent value="mapa" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Mapa de Parkings</CardTitle>
                <CardDescription>Visualiza tus plazas y reservas en el mapa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[400px] bg-slate-100 rounded-md overflow-hidden">
                  {/* Map placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-muted-foreground">Mapa interactivo de parkings</p>
                    </div>
                  </div>

                  {/* Map markers */}
                  <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <div className="mt-1 bg-white px-2 py-1 rounded text-xs shadow-md">Parking Central</div>
                  </div>

                  <div className="absolute top-1/2 right-1/4 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      B
                    </div>
                    <div className="mt-1 bg-white px-2 py-1 rounded text-xs shadow-md">Parking Norte</div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md">
                    <div className="text-xs font-semibold mb-1">Leyenda</div>
                    <div className="flex items-center gap-1 text-xs">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      <span>Tus plazas</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-1">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span>Otros parkings</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommended Spots */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Plazas Recomendadas</CardTitle>
              <CardDescription>Basado en tus preferencias y ubicación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Recommended Spot 1 */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Plaza D-12</CardTitle>
                    <CardDescription>Parking Sur</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>A 500m de tu ubicación</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span>€35/mes o €5/hora</span>
                    </div>
                    <Button className="w-full">Reservar</Button>
                  </CardContent>
                </Card>

                {/* Recommended Spot 2 */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Plaza E-05</CardTitle>
                    <CardDescription>Parking Este</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>A 750m de tu ubicación</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span>€30/mes o €4/hora</span>
                    </div>
                    <Button className="w-full">Reservar</Button>
                  </CardContent>
                </Card>

                {/* Recommended Spot 3 */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Plaza A-08</CardTitle>
                    <CardDescription>Parking Central</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>A 300m de tu ubicación</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span>€45/mes o €6/hora</span>
                    </div>
                    <Button className="w-full">Reservar</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
