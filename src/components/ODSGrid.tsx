const ODS_QUANTITY: number = 17;

export default function ODSGrid({ odsListStr }: { odsListStr: string }) {
  const odsList: string[] | null = odsListStr.split("; ").sort();

  if (!odsList) return <></>;

  const hasSpecificODS: boolean[] = [];
  for (let i: number = 1; i <= ODS_QUANTITY; i++) {
    if (odsList.includes(`${i}`)) hasSpecificODS[i - 1] = true;
    else hasSpecificODS[i - 1] = false;
  }

  return (
    <div className="grid self-center items-center max-lg:w-4/5 lg:w-3/5 grid-cols-6 gap-x-0 mx-0">
      {hasSpecificODS.map((value, index) => (
        <img
          key={index}
          src={`https://sig.ufca.edu.br/sigaa/img/ODS/${value ? `${index + 1}` : `${index + 1}_light`}.png`}
          className="w-full"
        ></img>
      ))}
      <img
        src="https://sig.ufca.edu.br/sigaa/img/ODS/ods_.png"
        className="w-full"
      ></img>
    </div>
  );
}
