export default function Home() {
  return (
    <article className="flex flex-col justify-center items-center text-justify" style={{marginTop: "2rem"}}>
      <p>
        Blog pessoal utilizado para me expressar a respeito de tudo que eu ache interessante.
        No momento existem duas sub-páginas, uma para estudos de linguas principalmente o Mandarim que vem sendo
        meu maior interesse linguístico no momento.
      </p>
      <p style={{marginTop: "1rem"}}>
        E outra aba para estudos de programação, com foco principal em catalogar o desenvolvimento de minha própria
        Game Engine
      </p>
      <p style={{marginTop: "1rem"}}>    
        Dentro de cada sub-página existe uma lista dos textos referente aos respectivos assuntos.
      </p>
    </article>
  );
}
