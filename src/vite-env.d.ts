/// <reference types="vite/client" />

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '@fontsource/*' {
  const content: Record<string, unknown>
  export default content
}
