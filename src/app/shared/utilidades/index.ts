export function generarStringRandom(longitud: number = 6): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let resultado = '';
  
  for (let i = 0; i < longitud; i++) {
    const indiceRandom = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indiceRandom];
  }
  
  return resultado;
}


