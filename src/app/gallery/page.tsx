import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Get all the logo images
const logoImages = [
  "123_Hub.png", "88MidsLogoLight.png", "AdyenLogoLight.png", "AfterpayLogoLight.png",
  "AkuratecoLogoLight.png", "AlfopayLogoLight.png", "AlphaPaysLogoLight.png", "AlphapoLogoLight.png",
  "ApcopayLogoLight.png", "ApplePay.png", "AqcualtscardsLogoLight.png", "AqyaPaymentsLogoLight.png",
  "Ari10LogoLight.png", "ArkPayLogoLight.png", "AstropayLogoLight.png", "AuthorizeNetLogoLight.png",
  "Axcess.png", "axisLogoLight.png", "BANK.png", "BankcardLogoLight.png", "BankeraLogoLight.png",
  "BCXPro.png", "BestPay24LogoLight.png", "BigEDirectLogoLight.png", "BigIdea.png",
  "BilderlingsLogoLight.png", "BitAndPayLogoLight.png", "Bithide.png", "BitoloLogoLight.png",
  "BitpaceLogoLight.png", "BlixtpayLogoLight.png", "BovaLogoLight.png", "BPWalletLogoLight.png",
  "BrightcartLogoLight.png", "BriteLogoLight.png", "BTC.png", "BVNKLogoLight.png",
  "Callpay.png", "CanapayLogoLight.png", "CaratipayLogoLight.png", "Cardiful.png",
  "CardPaymentzLogoLight.png", "CardSaverLogoLight.png", "CashBulls.png", "CatalystPayLogoLight.png",
  "CauriPay.png", "CeloxoLogoLight.png", "CentpaysLogoLight.png", "Centrobill.png",
  "ChapaLogoLight.png", "ChoicepayLogoLight.png", "CleoLogoLight.png", "CodapaymentsLogoLight.png",
  "CoindirectLogoLight.png", "CoinPaymentsLogoLight.png", "CoinsPaidLogoLight.png", "ColibrixLogoLight.png",
  "ConcrytLogoLight.png", "ConektaLogoLight.png", "ConnectPayLogoLight.png", "ContiantLogoLight.png",
  "CorpayLogoLight.png", "Creditcard.png", "CricpayzLogoLight.png", "Crypto.png",
  "Cryptomus.png", "CryptopayLogoLight.png", "CubixPayLogoLight.png", "CV BANCT.png",
  "CV MB.png", "CV MBW.png", "CV NTLR.png", "CV PSCD.png", "CypixLogoLight.png",
  "D24LogoLight.png", "DECTA.png", "DevengoLogoLight].png", "DimocoLogoLight.png",
  "DirectPayNetLogoLight.png", "DixipayLogoLight.png", "DNSPayLogoLight.png", "EasyTransacLogoLight.png",
  "EcommpayLogoLight.png", "EcoPayzLogoLight.png", "ElenpayLogoLight.png", "Emerchantpaylogolight.png",
  "EMPCorpLogoLight.png", "EnovepayLogoLight.png", "EpayLogoLight.png", "EPS.png",
  "EqualsMoneyLogoLight.png", "EspertoPayLogoLight.png", "ETH.png", "EutellerLogoLight.png",
  "Everpay.png", "ExactlyLogoLight.png", "ExpoNovumLogoLight.png", "ExyipayLogoLight.png",
  "eZeeWalletLogoLight.png", "FacileroLogoLight.png", "FiatSystemsLogoLight.png", "FinatecoLogoLight.png",
  "FinductiveLogoLight.png", "FingenomLogoLight.png", "FinraxLogolight.png", "FinsupportLogoLight.png",
  "fintectureLogoLight.png", "FintmLogoLight.png", "FinvertLogoLight.png", "First2PayLogoLight.png",
  "Flexepin.png", "Flexify.png", "FlykkLogoLight.png", "Forumpay.png",
  "FunangaLogoLight.png", "FXMBLogoLight.png", "Gate2wayLogoLight.png", "GatoWayLogoLight.png",
  "GenomeLogoLight.png", "GigadatLogoLight01.png", "GigadatLogoLight02.png", "GlobiancePayLogoLight.png",
  "Gpay.png", "Gr8PayLogoLight.png", "GravityPayments.png", "GumBallPayLogoLight.png",
  "GuruPayLogoLight.png", "GuruPayLogoLightEdited.png", "HaloPaysLogoLight.png", "HeroPaymentsLogoLight.png",
  "Hexopay.png", "HexopayLogoLight.png", "HowToPayLogoLight.png", "HuchLogoLight.png",
  "HutchLogoLight.png", "IBSBankLogoLight.png", "IbsettleLogoLight.png", "IlixiumLogoLight.png",
  "ImpayaLogoLight.png", "InovapayLogoLight.png", "InovioLogoLight.png", "InpayLogoLight.png",
  "InqLogoLight.png", "InteracLogoLight.png", "IntergiroLogoLight.png", "InterkassaLogoLight.png",
  "InvictusPayLogoLight.png", "IQono.png", "iSignThisLogolight.png", "ISXLogoLight.png",
  "ISXLogoLightEdited.png", "IvyLogoLight.png", "iWalletLogoLight.png", "JetonLogoLight.png",
  "KashaTechLogoLight.png", "Kinguin.png", "KinguinWhite.png", "KlarpayLogoLight.png",
  "KluwpLogoLight.png", "KryptonimLogoLight.png", "KushkiLogoLight.png", "KynexasLogoLight.png",
  "LibernetixLogoLight.png", "LuminarPayLogoLight.png", "LunuLogoLight.png", "LuqaPayLogoLight.png",
  "LuxonPayLogoLight.png", "MacroPayLogoLight.png", "MandatoLogoLight.png", "Match2Pay.png",
  "MBWay.png", "MIDsLogoLight.png", "MiFinityLogoLight.png", "MonetumLogoLight.png",
  "MPGLogoLight.png", "MSIPayLogoLight.png", "MuchBetterLogoLight.png", "Multibanco.png",
  "N26.png", "NarviLogoLight.png", "NeonPayLogoLight.png", "NeoSurfLogoLight.png",
  "Neteller.png", "NetellerLogoLight.png", "NexusBankLogoLight.png", "NicheClearLogoLight.png",
  "NodaLogoLight.png", "NovatiLogoLight.png", "Nummuspay.png", "NuveiLogoLight.png",
  "OneIoLogoLight.png", "OneToPayLogoLight.png", "OpenPayd.png", "OpsbridgeLogoLight.png",
  "OrientalWalletLogoLight.png", "OropayLogoLight.png", "PagsmileLogoLight.png", "ParamountCommerceLogoLight.png",
  "PassimpayLogoLight.png", "Pay4FunLogoLight.png", "PayablLogoLight.png", "PayAdmitLogoLight.png",
  "PayAgency.png", "PayAlmaLogoLight.png", "PayCCLogoLight.png", "PaycentageLogoLight.png",
  "PayDotComLogoLight.png", "PayecardsLogoLight.png", "PayFutureLogoLight.png", "PayIgloo.png",
  "PaylivreLogoLight.png", "PayMaxisLogoLight.png", "PaymentCenterLogoLight.png", "PaymentFarmLogoLight.png",
  "PaymentsProLogoLight.png", "PaymentzLogoLight.png", "PayMeroLogoLight.png", "PayneteasyLogoLight.png",
  "PayOkLogoLight.png", "PayOpLogoLight.png", "PayoroLogoLight.png", "PayRetailersLogoLight.png",
  "PayriverLogoLight.png", "PayrockLogoLight.png", "PaysafecardLogoLight.png", "PaysafeLogoLight.png",
  "PaysecureLogoLight.png", "PaystraxLogoLight.png", "PaytahLogoLight.png", "PaytentlyLogoLight.png",
  "Payviabank.png", "PayzLogoLight.png", "Peratera.png", "PGPayTechLogoLight.png",
  "PlixLogoLight.png", "PoliLogoLight.png", "PradexxLogoLight.png", "PraxisLogoLight.png",
  "ProcessingccLogoLight.png", "PurplepayLogoLight.png", "QaicashLogoLight.png", "RagapayLogoLight.png",
  "RapidTransferLogoLight.png", "RapydLogoLight.png", "RastpayLogoLight.png", "ReactivePay.png",
  "RPDT.png", "SaltarpayLogoLight.png", "SavannahLogoLight.png", "SHPayments.png",
  "SiruMobileLogoLighr.png", "SkrillLogoLight.png", "Slyse.png", "SmilePayzLogoLight.png",
  "SnelPayLogoLight.png", "SpearPaymentsLogoLight.png", "SpectrePaymentsLogoLight.png", "SpectrumPaymentSolutionsLogoLight.png",
  "SticPayLogoLight.png", "Stradapay.png", "SulPaymentsLogoLight.png", "TechTiqLogoLight.png",
  "TpfLogoLight.png", "Transact365LogoLight.png", "TransactWorldLogoLight.png", "TransferMateLogoLight.png",
  "TransferWorldLogoLight.png", "TransfrLogoLight.png", "TrueLayerLogoLight.png", "TrumoLogoLight.png",
  "TrustlyLogoLight.png", "TrustPaymentsLogoLight.png", "Tunzer.png", "TXNProLogoLight.png",
  "UbankConnectLogoLight.png", "UnisonGMLogoLight.png", "UnlimitLogoLight.png", "Utorg.png",
  "ValetLogoLight.png", "ValyuzLogoLight.png", "VCreditosLogoLight.png", "VegaWalletLogoLight.png",
  "VoltLogoLight.png", "VoucherryLogoLight.png", "WellsPaymentsLogoLight.png", "WltpayproLogoLight.png",
  "WorldlineLogoLight.png", "XaceLogoLight.png", "xcoinsLogoLight.png", "XGateway.png",
  "XSwiftly.png", "YaspaLogoLight.png", "YO-DALogoLight.png", "ZimplerLogoLight.png"
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center border-b border-border">
        <Link href="/" passHref>
          <Button variant="ghost">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Corporate Logo Gallery</h1>
          <p className="text-muted-foreground">Over 300+ payment and financial service logos</p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {logoImages.length} Logos
        </Badge>
      </header>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {logoImages.map((imageName, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                  <Image
                    src={`/gallery/${imageName}`}
                    alt={imageName.replace('.png', '').replace('LogoLight', '').replace(/([A-Z])/g, ' $1').trim()}
                    width={120}
                    height={120}
                    className="max-w-full max-h-full object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center truncate">
                  {imageName.replace('.png', '').replace('LogoLight', '').replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-12 py-8 text-center text-muted-foreground">
        <p>&copy; 2025 Tris Giles. All rights reserved.</p>
      </footer>
    </div>
  )
}
