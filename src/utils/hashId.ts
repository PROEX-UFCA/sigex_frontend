/**
 * Gera um número inteiro determinístico a partir de uma string de ID.
 *
 * Soma os valores Unicode de cada caractere da string. O resultado é
 * utilizado para selecionar imagens padrão de forma consistente —
 * o mesmo `id` sempre produz o mesmo índice, evitando troca de imagem
 * entre renderizações.
 *
 * @param id - Identificador textual do projeto.
 * @returns Soma dos code points Unicode de todos os caracteres.
 *
 * @example
 * hashId("abc") // → 97 + 98 + 99 = 294
 * hashId("abc") % 3 // → índice estável para arrays de tamanho 3
 */
export const hashId = (id: string) =>
  id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
