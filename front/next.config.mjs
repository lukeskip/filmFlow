/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Define la función generateStaticParams()
  generateStaticParams: async () => {
    // Puedes realizar operaciones asíncronas aquí si es necesario
    return {
      // Devuelve los parámetros estáticos que deseas precalcular
      staticParams: {
        key: 'value',
        // Otros parámetros estáticos...
      }
    };
  }
};
export default nextConfig;
