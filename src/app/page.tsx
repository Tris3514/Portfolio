"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, Camera, Palette, Cuboid, Globe, ExternalLink, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center diagonal-crosses relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
            <div className="plus-grid-animation w-full h-full"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 text-sm">
                👋 Hello, I&apos;m
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tris Giles
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
                Graphic Designer & Multimedia Artist
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                I create compelling visual stories through graphic design and multimedia art. Passionate about innovative design, creative storytelling, and bringing ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mb-12">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <div className="animate-bounce">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Creative Visual Storyteller</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  I&apos;m a passionate graphic designer and multimedia artist with a love for visual storytelling. With expertise in both traditional and digital design, I bring creative visions to life through innovative design solutions and compelling multimedia experiences.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-2xl">TG</div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Tris Giles</h3>
                          <p className="text-muted-foreground mb-4">Graphic Designer & Multimedia Artist</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            I specialize in creating compelling visual narratives through graphic design and multimedia art. With 5+ years of experience, I&apos;ve worked with brands and artists to deliver innovative design solutions that captivate and inspire.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">5+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Camera className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Adobe Creative Suite</h4>
                          <p className="text-sm text-muted-foreground">Adobe Creative Suite, Branding, Social Media</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Palette className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Graphic Design</h4>
                          <p className="text-sm text-muted-foreground">Photoshop, Illustrator, Office</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Cuboid className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">3D Design</h4>
                          <p className="text-sm text-muted-foreground">Blender, Substance Painter, Unity/Unreal</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Web Design</h4>
                          <p className="text-sm text-muted-foreground">UI/UX, HTML, CSS</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">My Work</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Corporate Logo Design</CardTitle>
                      <CardDescription>
                        Complete brand identity package for over 300 companies, including both new and faithfully recreated logo designs, color palette, typography, and brand guidelines.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Adobe Illustrator</Badge>
                        <Badge variant="secondary">Adobe Photoshop</Badge>
                        <Badge variant="secondary">Branding</Badge>
                        <Badge variant="secondary">Typography</Badge>
                        <Badge variant="secondary">Visual Identity</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => {
                            const gallerySection = document.getElementById('gallery');
                            if (gallerySection) {
                              gallerySection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Gallery
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Igaming Projects</CardTitle>
                      <CardDescription>
                        A collection of work spanning multiple formats and platforms for the igaming industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Adobe Illustrator</Badge>
                        <Badge variant="secondary">Adobe Photoshop</Badge>
                        <Badge variant="secondary">Blender</Badge>
                        <Badge variant="secondary">Substance Painter</Badge>
                        <Badge variant="secondary">Team Communication</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => {
                            const igamingSection = document.getElementById('igaming-gallery');
                            if (igamingSection) {
                              igamingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Gallery
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Website Templates</CardTitle>
                      <CardDescription>
                        Modern, responsive website templates for various industries including business, e-commerce, and creative portfolios.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">HTML/CSS</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">Responsive Design</Badge>
                        <Badge variant="secondary">UI/UX</Badge>
                        <Badge variant="secondary">Web Development</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="/website-templates">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Portfolio</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Corporate Logo Gallery</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Over 300+ payment and financial service logos I&apos;ve designed for various clients and projects.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {[
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
                ].slice(0, 48).map((imageName, index) => (
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
              <div className="text-center mt-8">
                <Badge variant="secondary" className="text-sm">
                  Showing 48 of 300+ logos
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* iGaming Gallery Section */}
        <section id="igaming-gallery" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">iGaming Assets</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Gaming Industry Projects</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Specialized 3D assets and designs created for the gaming industry, including barrels, cannons, pistols, and hook symbols.
                </p>
              </div>
              
              {/* Barrel Assets */}
              <div className="mb-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Barrel Assets</h3>
                  <p className="text-muted-foreground">3D barrel models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {["barrel1.png", "barrel2.png", "barrel3.png", "barrel4.png", "barrel5.png", "barrel6.png", "barrel7.png", "barrel8.png"].map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/barrel/${imageName}`}
                            alt={`Barrel ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Barrel {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Cannon Assets */}
              <div className="mb-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Cannon Assets</h3>
                  <p className="text-muted-foreground">3D cannon models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {["cannon1.png", "cannon2.png", "cannon3.png", "cannon4.png", "cannon5.png", "cannon6.png", "cannon7.png", "cannon8.png"].map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/cannon/${imageName}`}
                            alt={`Cannon ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Cannon {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pistol Assets */}
              <div className="mb-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Pistol Assets</h3>
                  <p className="text-muted-foreground">3D pistol models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {["pistol1.png", "pistol2.png", "pistol3.png", "pistol4.png", "pistol5.png", "pistol6.png", "pistol7.png", "pistol8.png"].map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
        <Image
                            src={`/igaming-gallery/pistol/${imageName}`}
                            alt={`Pistol ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Pistol {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Hook Assets */}
              <div className="mb-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Hook Symbols</h3>
                  <p className="text-muted-foreground">Hook symbol designs for gaming interfaces</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
            <Image
                          src="/igaming-gallery/hook/BF-Symbol-Hook-Full.png"
                          alt="Hook Symbol"
                          width={120}
                          height={120}
                          className="max-w-full max-h-full object-contain"
                          unoptimized
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Hook Symbol
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Get In Touch</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Have a project in mind or just want to chat? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I&apos;ll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                          <input 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                            id="firstName" 
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                          <input 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                            id="lastName" 
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                          id="email" 
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <input 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                          id="subject" 
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea 
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]" 
                          id="message" 
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-muted-foreground mb-2">Send me an email anytime</p>
                            <a href="mailto:tris.giles@example.com" className="text-primary hover:text-primary/80 transition-colors">
                              tris.giles@example.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 6pm</p>
                            <a href="tel:+15551234567" className="text-primary hover:text-primary/80 transition-colors">
                              +1 (555) 123-4567
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-muted-foreground mb-2">Available for remote work</p>
                            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                              Creative Studio, CA
          </a>
        </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:john.doe@example.com">
                    <Mail className="h-5 w-5" />
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
                      document.getElementById('about')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>tris.giles@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Creative Studio, CA</p>
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