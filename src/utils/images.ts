/**
 * Mapeamento de área temática para lista de imagens padrão do projeto.
 *
 * Cada chave corresponde a uma categoria reconhecida pela aplicação.
 * As imagens são selecionadas deterministicamente via {@link hashId},
 * garantindo que o mesmo projeto sempre exiba a mesma imagem.
 *
 * @remarks
 * Os arquivos de imagem devem estar na pasta `public/` da build.
 *
 * @example
 * const images = DEFAULT_PROJECT_IMAGES["Tecnologia"];
 * const img = images[hashId(projectId) % images.length];
 */
export const DEFAULT_PROJECT_IMAGES = {
  Comunicação: ["/comunicação.png", "/comunicação_2.png", "/comunicação_3.png"],
  Cultura: ["/cultura.png", "/cultura_2.png", "/cultura_3.png"],
  Justiça: ["/justiça.png", "/justiça_2.png", "/justiça_3.png"],
  Educação: ["/educação.png", "/educação_2.png", "/educação_3.png"],
  Ambiente: ["/ambiente.png", "/ambiente_2.png", "/ambiente_3.png"],
  Saúde: ["/saúde.png", "/saúde_2.png", "/saúde_3.png"],
  Tecnologia: ["/tecnologia.png", "/tecnologia_2.png", "/tecnologia_3.png"],
  Trabalho: ["/trabalho.png", "/trabalho_2.png", "/trabalho_3.png"],
};
