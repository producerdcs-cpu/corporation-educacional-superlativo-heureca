/* eslint-disable */
// @ts-nocheck
// Generated-style TanStack Router route tree for the current Foundation 1.0 source.
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AulasRouteImport } from './routes/aulas'
import { Route as IaRouteImport } from './routes/ia'
import { Route as UniversoRouteImport } from './routes/universo'
import { Route as ContatoRouteImport } from './routes/contato'
import { Route as ExploradorRouteImport } from './routes/explorador'
import { Route as PrimosRouteImport } from './routes/primos'
import { Route as TrabalhosRouteImport } from './routes/trabalhos'
import { Route as ReciclagemRouteImport } from './routes/reciclagem'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const AulasRoute = AulasRouteImport.update({ id: '/aulas', path: '/aulas', getParentRoute: () => rootRouteImport } as any)
const IaRoute = IaRouteImport.update({ id: '/ia', path: '/ia', getParentRoute: () => rootRouteImport } as any)
const UniversoRoute = UniversoRouteImport.update({ id: '/universo', path: '/universo', getParentRoute: () => rootRouteImport } as any)
const ContatoRoute = ContatoRouteImport.update({ id: '/contato', path: '/contato', getParentRoute: () => rootRouteImport } as any)
const ExploradorRoute = ExploradorRouteImport.update({ id: '/explorador', path: '/explorador', getParentRoute: () => rootRouteImport } as any)
const PrimosRoute = PrimosRouteImport.update({ id: '/primos', path: '/primos', getParentRoute: () => rootRouteImport } as any)
const TrabalhosRoute = TrabalhosRouteImport.update({ id: '/trabalhos', path: '/trabalhos', getParentRoute: () => rootRouteImport } as any)
const ReciclagemRoute = ReciclagemRouteImport.update({ id: '/reciclagem', path: '/reciclagem', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/aulas': typeof AulasRoute
  '/ia': typeof IaRoute
  '/universo': typeof UniversoRoute
  '/contato': typeof ContatoRoute
  '/explorador': typeof ExploradorRoute
  '/primos': typeof PrimosRoute
  '/trabalhos': typeof TrabalhosRoute
  '/reciclagem': typeof ReciclagemRoute
}
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/aulas': typeof AulasRoute
  '/ia': typeof IaRoute
  '/universo': typeof UniversoRoute
  '/contato': typeof ContatoRoute
  '/explorador': typeof ExploradorRoute
  '/primos': typeof PrimosRoute
  '/trabalhos': typeof TrabalhosRoute
  '/reciclagem': typeof ReciclagemRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/aulas' | '/ia' | '/universo' | '/contato' | '/explorador' | '/primos' | '/trabalhos' | '/reciclagem'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/aulas' | '/ia' | '/universo' | '/contato' | '/explorador' | '/primos' | '/trabalhos' | '/reciclagem'
  id: '__root__' | '/' | '/aulas' | '/ia' | '/universo' | '/contato' | '/explorador' | '/primos' | '/trabalhos' | '/reciclagem'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AulasRoute: typeof AulasRoute
  IaRoute: typeof IaRoute
  UniversoRoute: typeof UniversoRoute
  ContatoRoute: typeof ContatoRoute
  ExploradorRoute: typeof ExploradorRoute
  PrimosRoute: typeof PrimosRoute
  TrabalhosRoute: typeof TrabalhosRoute
  ReciclagemRoute: typeof ReciclagemRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/aulas': { id: '/aulas'; path: '/aulas'; fullPath: '/aulas'; preLoaderRoute: typeof AulasRouteImport; parentRoute: typeof rootRouteImport }
    '/ia': { id: '/ia'; path: '/ia'; fullPath: '/ia'; preLoaderRoute: typeof IaRouteImport; parentRoute: typeof rootRouteImport }
    '/universo': { id: '/universo'; path: '/universo'; fullPath: '/universo'; preLoaderRoute: typeof UniversoRouteImport; parentRoute: typeof rootRouteImport }
    '/contato': { id: '/contato'; path: '/contato'; fullPath: '/contato'; preLoaderRoute: typeof ContatoRouteImport; parentRoute: typeof rootRouteImport }
    '/explorador': { id: '/explorador'; path: '/explorador'; fullPath: '/explorador'; preLoaderRoute: typeof ExploradorRouteImport; parentRoute: typeof rootRouteImport }
    '/primos': { id: '/primos'; path: '/primos'; fullPath: '/primos'; preLoaderRoute: typeof PrimosRouteImport; parentRoute: typeof rootRouteImport }
    '/trabalhos': { id: '/trabalhos'; path: '/trabalhos'; fullPath: '/trabalhos'; preLoaderRoute: typeof TrabalhosRouteImport; parentRoute: typeof rootRouteImport }
    '/reciclagem': { id: '/reciclagem'; path: '/reciclagem'; fullPath: '/reciclagem'; preLoaderRoute: typeof ReciclagemRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AulasRoute,
  IaRoute,
  UniversoRoute,
  ContatoRoute,
  ExploradorRoute,
  PrimosRoute,
  TrabalhosRoute,
  ReciclagemRoute,
}
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
