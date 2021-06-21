import React from "react";
import  {LottoBox, LottoBoxNumber, LottoBoxPlus} from "./LottoBoxComponentStyles.jsx";

const LottoBoxComponent = ({ lottoNumber }) => {
  const numbers = lottoNumber.slice(0, 6);
  const b_number = lottoNumber[6];

  return (
    <>
        {lottoNumber.length > 0 ?
            (
                <LottoBox>
                    {numbers.map((n, i) => (
                        <LottoBoxNumber key={i}>
                            {n}
                        </LottoBoxNumber>
                    ))}
                    <LottoBoxPlus>+</LottoBoxPlus>
                    <LottoBoxNumber>
                        {b_number}
                    </LottoBoxNumber>
                </LottoBox>
            )
        :
        (<h1>Server Temporarily Not Available</h1>)


        }
    </>
  );
};

export default LottoBoxComponent;
