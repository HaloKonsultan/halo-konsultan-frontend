import React from "react"

function ImageBank(props) {
    const handleLogo = (bank) => {
        switch (bank) {
            case "BRI":
                return ("https://i.pinimg.com/originals/f8/0a/ac/f80aac3c5591e45f0d1da6b07a801b7c.png")
                break;
            case "BNI":
                return ("https://i.pinimg.com/originals/36/38/43/36384348ef9d7bfff66da6da9e975d56.png")
                break;
            case "BCA":
                return ("https://pngimage.net/wp-content/uploads/2018/05/bank-bca-png-4.png")
                break;
            case "BSI":
                return ("https://1.bp.blogspot.com/-4qkYYe_sQoI/YBvH0NmYCjI/AAAAAAAAab0/DpiJkew5pPg2kZeoYp3uLqAuoBs7wwldwCLcBGAsYHQ/s1280/Download%2BLogo%2BBANK%2BSYARIAH%2BINDONESIA%2BCDR%2Bdan%2BPNG.png")
                break;
            case "MANDIRI":
                return ("https://kinetic.id/wp-content/uploads/2018/07/mandiri.png")
                break;
            case "MAYBANK":
                return ("https://images.squarespace-cdn.com/content/v1/5c756c67e5f7d15021008390/1563961660176-L5DY9LBJBNI1ET9VFMD2/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/03-Maybank.png")
                break;
            case "CITIBANK":
                return ("https://lh3.googleusercontent.com/proxy/cz7GXD75bzQngamG_qvKJH2v7nC5mqZi5wLQPiRk8iOvGj5iOrR5rTjehImWCYK6hGrDa8XpKU6AUWNCkJDQOxsDyT1eaEw_ZOgCTWTIR5GF")
                break;
        }
    }

    return (
        <>
            <img src={handleLogo(props.bank)} alt="" style={{
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 4,
            }}/>
        </>
    )
}

export default ImageBank