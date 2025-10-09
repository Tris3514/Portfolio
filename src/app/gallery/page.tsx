"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
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
    <div className="min-h-screen dark">
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center diagonal-crosses-dark relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
            <div className="plus-grid-animation-dark w-full h-full"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 text-sm">
                🎨 Logo Design
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Corporate Logo Gallery
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
                Over 300+ Payment & Financial Service Logos
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                A comprehensive collection of corporate logo designs, featuring both faithful recreations of existing company logos and entirely new, custom-made designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('gallery')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  View Gallery
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/">
                    Back to Portfolio
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mb-12">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Logo Collection</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Corporate Logo Designs</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A collection of my logo design work, featuring both faithful recreations of existing company logos and entirely new, custom-made designs—each crafted to meet the unique needs of the brand.
                </p>
              </div>
              
              {/* Gallery Grid */}
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <button 
                className="text-2xl font-bold text-primary mb-4 block text-left"
                onClick={() => {
                  document.getElementById('home')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Tris Giles
              </button>
              <p className="text-muted-foreground mb-6 max-w-md">
                Graphic Designer & Multimedia Artist creating compelling visual stories through innovative design and creative multimedia experiences.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/tristian-giles-83a68337b" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('home')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('gallery')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/">
                      Portfolio
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Gallery Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{logoImages.length}+ Logos</p>
                <p>Corporate Design</p>
                <p>Brand Identity</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Tris Giles. All rights reserved.</p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">Built with Next.js, TypeScript & shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
