import Image from 'next/image'
import React from 'react'
import minoo from "@/../public/minato/mineye.jpg";
import { Table } from 'react-bootstrap';

const Minato = () => {
  return (
    <div
      className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#ffe912",
        border: "2px solid #333",
        borderRadius: "10px",
        color: "#000",
        boxSizing: "border-box",
        borderRadius: "8px",
        padding: "5px",
        boxShadow: "5px 5px 5px 5px rgba(0, 106, 255, 0.72)",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        fontSize: "18px",
      }}
    >
      <Image
        className="m-4"
        style={{
          textDecoration: "none",
          backgroundColor: "#0e56e7ff",
          color: "#000",
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "5px",
          boxShadow: "5px 5px 5px 5px rgba(255, 0, 0, 0.72)",
        }}
        src={minoo}
        alt="minato"
        height={600}
        width={400}
      />

      <h1 className="text-center productsHeader fs-1 fw-bold">Minato</h1>
      <p className="text-center">
        Minato Namikaze (波風ミナト, Namikaze Minato) Konohagakure'nin Dördüncü
        Hokagesi (四代目火影, Yondaime Hokage, Tam anlamıyla: Dördüncü Ateş
        Gölgesi) idi. Dünya çapında Konoha'nın Sarı Şimseği (木ノ葉の黄色い閃光,
        Konoha no Kiiroi Senkō, İngiliz Televizyonu: Yellow Flash of the Leaf)
        olarak ünlendi. Dokuz Kuyruklu Şeytan Tilki'nin Saldırısı sırasında
        kendi hayatını feda ederek Dokuz Kuyruklu'yu yeni doğmuş oğlu Naruto
        Uzumaki'ye mühürledi.
      </p>

      <p className="text-center">
        Minato, köylülerin saygısını ve tanınmasını kazanarak Hokage olma
        hayaliyle Konoha Akademisine girdi. Kushina Uzumaki , Konoha'ya
        taşındığında Minato ile aynı sınıfa yerleştirildi. Minato, parlak kızıl
        saçlarına hemen kapıldı ve onları güzel buldu. Minato, nesilde yalnızca
        bir kez ortaya çıkan türden bir ninja olarak doğal bir dahiydi. Jiraiya
        liderliğindeki bir genin birimi olan 6. Takım'a eklendiğinde . Sannin,
        Minato'ya özel bir ilgi duydu ve onu çırağı olarak alarak ona kendine
        özgü yeteneklerinin çoğunu öğretti. Zamanla, Minato'nun olağanüstü
        becerileri Jiraiya'yı onun bir gün dünyayı kurtaracak biri olan
        Kehanetin Çocuğu olabileceğine inandırdı . Yıllar sonra, mezun olup
        ninja olduktan sonra, Kushina Kumogakure güçleri tarafından kaçırıldı.
        Konoha, ninjalarını onu kurtarmak için seferber etti, ancak Kushina'nın
        yollarını işaretlemek için geride bıraktığı kızıl saç tellerini yalnızca
        Minato fark etti. Tek başına hareket eden Minato, onu esir alanlardan
        kurtardı. Konoha'ya dönerlerken Minato, onun saçlarına ve gücüne olan
        hayranlığını itiraf etti ve bu, daha önce Minato'yu "güvenilmez" ve
        hatta "kız gibi" sanan Kushina'nın ona aşık olmasına neden oldu. Dokuz
        Kuyruklu'nun kaçırılmasına tek başına son verme başarısı Minato'nun
        ününü büyük ölçüde artırdı ve onu sıradan bir shinobi'den, hem Ateş
        Ülkesi'nde hem de ötesinde Kumo'nun kaçırılma girişimini engellemedeki
        büyük başarısıyla birçok ulus tarafından tanınan birine dönüştürdü
      </p>

      <p className="text-center">
        Minato, Kushina ile evlendi ve kısa süre sonra Naruto'yu doğurdu. Ancak
        Dokuz Kuyruklu Şeytan Tilki'nin Konoha'ya saldırması üzerine Minato,
        Kushina'yı ve Naruto'yu güvenli bir yere götürmek için köyden ayrılmak
        zorunda kaldı. Dokuz Kuyruklu'yu yenmek için Minato, Hiraishin no Jutsu
        tekniğini kullanarak düşmanının üzerine hızla atladı ve onu alt etti.
        Ancak, bu sırada Minato ağır yaralandı ve Dokuz Kuyruklu'yu yenmek için
        kendi hayatını feda etmek zorunda kaldı. Minato, Dokuz Kuyruklu'yu
        Naruto'ya mühürleyerek onun gücünü kontrol etmesini sağladı. Bu olay,
        Minato'nun Konoha'nın en büyük kahramanlarından biri olarak anılmasına
        neden oldu. Minato'nun cesareti ve özverisi, Konoha'nın güvenliğini
        sağlamak için yaptığı fedakarlık, onu Konoha'nın efsanevi liderlerinden
        biri haline getirdi. Onun mirası, Naruto'nun da dahil olduğu birçok
        ninja tarafından sürdürülmektedir.
      </p>

      <h2 className="text-center fw-bold productsHeader">
        Minato Hakkında Bilgi
      </h2>
      <p className="text-center">
        Konoha'nın Sarı Flaşı Minato ve Kushina, Minato'nun onu kurtardığı andan
        itibaren bir çiftti ve Kushina, sevgisiyle Dokuz Kuyruklu'yu içindeki
        mühürlü halde tutabildi. Bu amaca ulaşmak için Minato'ya hem Kushina hem
        de Jiraiya'dan birçok mühürleme tekniği öğretildi. Konoha Üçüncü Shinobi
        Dünya Savaşı'na dahil olduğunda , Minato'nun yükümlülükleri Kushina'yı
        koruma çabaları ve savaşı kazanmaya yardım etme arasında bölündü. Han ve
        Rōshi'ye karşı bir çatışma sırasında , iki Iwa-nin Kuyruklu Canavar
        Modlarını kullanarak 6. Takıma Kuyruklu Canavar Toplarıyla saldırdılar .
        Minato kendini ve ekibini güvenliğe ışınladıktan sonra Minato, Kuyruklu
        Canavar Topu'ndan ilham aldı, doğasını araştırdı ve Rasengan'ı yaratmak
        için üç yıllık bir sürece başladı . Tamamladığı gün, Kushina onu ziyaret
        etti. Diğer jinchūrikilerle savaşmak zorunda kalması durumunda onun için
        Rasengan'ı geliştirdiğini açıkladı. Dokuz Kuyruklu, o anda kurtulmaya
        çalıştı, çakrası sızdı ve Minato'yu yaraladı. Minato mührü güçlendirmeyi
        başardı ve Kushina'ya söylediği olumlu sözler, onu da direnmeye teşvik
        etti. Dokuz Kuyruklu, karşılaşma sırasında Minato'nun karnını
        pençeleriyle deldi, ancak Minato iyileşti. Kushina daha sonra onu evinin
        tepesine çıkardı ve Minato'nun kendisi için yaptığını belirttiği
        Rasengan adını verdi. Minato ve Kushina sonunda birbirleriyle
        evlendiler. Kendisini başarılı ve sorumluluk sahibi bir ninja olarak
        kanıtladıktan sonra Minato, Rin Nohara , Obito Uchiha ve Kakashi
        Hatake'den oluşan kendi ekibinin başına getirildi . Animede, Üçüncü
        Hokage Minato'ya Kakashi'nin babasının ölümünün neden olduğu acının
        üstesinden gelmesine yardım etme ve ona bir ninja olmanın insani
        unsurlarını hatırlatma özel görevini verdi . Minato , onlara takım
        çalışmasının değerini öğretmek için ekibine bir çan testi yaptı. Minato,
        Rin ve Obito'ya kıyasla muazzam Kakashi'ye karşı daha az direndi, bu
        yüzden takım çalışması olmadan çanları elde edemediler. Ne yazık ki,
        Kakashi bunu fark etti, ancak Obito ve Rin'i yalnızca çanları elde etmek
        için bir araç olarak kullandı. Yine de, bir takım olarak çalışarak
        testin amacına ulaştıkları için onları geçti. Obito ve Rin'in yürekten
        benimsediği ama Kakashi'nin duymazdan geldiği bu mesaj, daha sonra takım
        çalışmalarını geliştirmeleri konusunda onları cesaretlendirdi. Minato,
        Kannabi Köprüsü'nü yıkmak için Kusagakure'ye yapılan bir görev sırasında
        , ön saflara doğru ilerlerken görevin liderliğini yakın zamanda jōnin
        olan Kakashi'ye devretti . Hayatta kalan ve sayıca az olan Konoha
        ninjalarıyla buluştu ve tek başına karşıt Iwagakure güçlerini yok etti.
        Animede, bin ninjaya karşı bu savaştaki zaferi, Üçüncü Tsuchikage'yi bir
        barış antlaşması kabul etmeye ikna etti. Daha sonra ekibiyle
        buluştuğunda Kakashi ve Rin'i ve Iwa-ninler tarafından çevrelenmiş halde
        buldu, Obito ise çoktan kaybolmuştu. Onları kurtardı, iyileştikten sonra
        orijinal görevlerini tamamlamalarına yardım etti ve Obito'nun yasını
        tutmak için onlarla birlikte Konoha'ya döndü. Minato'nun rekabet eden
        yükümlülükleri daha sonra Obito'nun ölümünün trajedisini
        tekrarlayacaktı: Başka bir görevdeyken Madara, Obito'yu bozma planının
        bir parçası olarak, Kakashi'nin onu kurtarma girişimi sırasında ölen
        Kirigakure'nin Rin'i kaçırmasını organize etti. Minato, savaş sırasında
        Kumogakure'li A ile birkaç kez karşılaştı ve aralarındaki birçok savaşta
        bir rekabet gelişti. İlk karşılaşmalarında Minato ve A hızlarıyla
        dövüştüler ve Minato daha hızlı olduğunu kanıtladı. Rekabetleri sona
        ermeden önce geri çekilme emri aldı, ancak A'yı ve Kushina gibi bir
        jinchūriki olan kardeşi B'yi övmek için kaldı ; A'yı B'ye iyi bakması ve
        onun da bir insan olduğunu hatırlaması için teşvik etti. A, Minato'nun
        peşine düştü, bu yüzden Minato, B'ye karşı harekete geçti ve A onu ve
        ekibini bırakmazsa onu öldürmekle tehdit etti. Minato, bir gün A ile
        Kage olarak buluşacaklarından emindi
      </p>

      <h2 className="text-center fw-bold productsHeader">Dördüncü Hokage</h2>
      <p className="text-center">
        Savaş sırasındaki performansı nedeniyle Minato, Orochimaru yerine
        Dördüncü Hokage seçildi. Hokage Muhafız Bölüğüne , Hokage'ye hizmet etme
        görevlerinde onlara her an daha iyi yardımcı olmak için Uçan Gök
        Gürültüsü Tanrısı Tekniğini öğretti . Animede ayrıca, Obito ve Rin'in
        ölümlerinden sonra düştüğü karanlıktan çıkan, artık bir Anbu olan
        Kakashi'ye yardım etmeye çalıştı . Üçüncü Hokage'den ona sorumlulukların
        kademeli olarak devredilmesi sırasında, Üçüncü Hokage Minato'ya
        hamileliği sırasında Kushina'yı koruma görevini vererek Kakashi'nin
        yaşam değerini geri kazandırmasını tavsiye etti. Bir jinchūriki olarak,
        doğum sancısı Dokuz Kuyruklu'yu Kushina'ya mühürleyen mührü
        zayıflatacaktı. Bu nedenle özel önlemler alınmalıydı: Çocuk, köyün
        dışında, etrafı bariyerlerle çevrili ve ekstra koruma sağlayan birkaç
        Anbu muhafızı bulunan ücra bir yerde gizlice dünyaya getirilecekti.
        Minato doğum konusunda pek endişeli değildi ve hatta iyi çalışması için
        Kakashi'ye minnettarlık göstergesi olarak bir gün izin vermişti. O ve
        Kushina, Jiraiya'nın ilk kitabının ana karakterinden esinlenerek
        oğulları için "Naruto" isminde bir karara varmışlardı ; Naruto'larının
        da karakter (ve dolayısıyla yazarı) kadar kararlı olmasını umuyorlardı.
        Jiraiya, onları Naruto'nun vaftiz babası olacağı için farklı bir seçim
        yapmaya ikna etmeye çalıştı, ancak bunun iyi bir şey olduğunda ısrar
        ettiler. Naruto, 10 Ekim gecesi doğdu. Minato, doğumdan sadece birkaç
        dakika sonra Dokuz Kuyruklu'nun zayıflamış mührünü geri yüklemek için
        hazırlıklar yapmaya başladı, ancak Tobi olarak da bilinen maskeli bir
        adamın gelişiyle kesintiye uğradı . Tobi, Anbu muhafızlarını ve ebeleri
        öldürdü ve yeni doğan Naruto'yu rehin aldı ve Minato, Kushina'dan geri
        çekilmezse onu öldüreceğiyle tehdit etti. Minato, Naruto'yu hemen ondan
        geri aldı, ancak Naruto'nun üzerine patlayıcı etiketler
        yerleştirildiğini keşfetti. Minato, Naruto'yu zarardan korumak için
        ışınlanmak zorunda kaldı ve bu da Tobi'nin Kushina ile kaçmasına olanak
        sağladı. Naruto için güvenli bir yer buldu ve Tobi tarafından vücudundan
        çıkarılan Dokuz Kuyruklu tarafından öldürülmekten kurtarmak için
        zamanında Kushina'ya ışınlandı. Köyü korumak için yola çıkmadan önce
        anne ve oğlunu yeniden bir araya getirdi. Minato, Dokuz Kuyrukluların
        Konoha'ya saldırısının ilk aşamalarında köye döndü ve Hokage Kayası'nı
        yok etmeden önce bir Kuyruklu Canavar Topu'nu ışınlamak için zamanında
        yetişti . Olanları ona bildirmek için Üçüncü Hokage'ye ulaşmaya çalıştı
        ancak onu ışınlamaya çalışan Tobi tarafından engellendi . Minato kaçmak
        için zamanında tepki verdi ancak Tobi onu takip etti. Tobi, Dokuz
        Kuyrukluların hareketlerini kontrol ettiği için Konoha'yı kurtarmak için
        onu yenmek büyük önem taşıyordu. Minato başlangıçta ona başarılı bir
        şekilde saldırmakta zorlandı ancak birkaç başarısız saldırıdan sonra
        sonunda ona bir Rasengan ile vurdu ve istediği zaman Tobi'ye
        ışınlanmasını sağlayan bir Uçan Gök Gürültüsü Tanrısı mührüyle
        damgaladı. Daha sonra Tobi'ye bir Sözleşme Mührü kullanarak Dokuz
        Kuyrukluları kontrolünden çıkardı ve onu kaçmaya zorladı. Artık
        kontrolden çıkan Dokuz Kuyruklu Canavar, köyden çekilmeye başladı, ancak
        onu takip eden Konoha ninjalarına saldırmaya devam etti. Başka bir
        Kuyruklu Canavar Topu hazırlarken, Minato onu durdurmak için zamanında
        yetişti ve bu sefer Gamabunta'yı üzerine bıraktı . Gamabunta'nın Dokuz
        Kuyruklu Canavar'ı kontrol altında tutmasını ve Dokuz Kuyruklu Canavar'ı
        Naruto ve Kushina'nın bulunduğu yere, köyden ulaşabileceği en uzak yere
        götürmek için gereken çakrayı toplamasını sağladı. Kushina canavarı
        kontrol altına aldı ve ne yapacaklarına karar verirken kaçamaması için
        bir bariyer kurdu. Köyü korumak için Kushina, Dokuz Kuyruklu Canavar'ın
        kendisine geri mühürlenmesini ve onunla birlikte ölmesini teklif etti.
        Minato, Tobi tekrar saldırırsa Dokuz Kuyruklu Canavar'ın gücüne ihtiyaç
        duyulacağına inanarak bunu reddetti. Jiraiya'nın "Kehanetin Çocuğu"
        hakkındaki sözlerini hatırlayan Minato, Naruto'nun o çocuk olduğuna ve
        bir gün dünyayı kurtaracağına inanmaya karar verdi. Naruto'yu buna
        hazırlamak için Minato, Naruto'yu Dokuz Kuyruklu'nun yeni jinchūriki'si
        yapacaktı, böylece Naruto onun gücünden faydalanabilecekti. Dokuz
        Kuyruklu'nun çakrası bir bebeğe mühürlenemeyecek kadar büyük olduğundan,
        Minato Ölü Şeytan Tüketen Mühür'ü kullanarak çakrasını ikiye böldü ve
        Yin yarısını kendi içine mühürledi. Ne planladıklarını anlayan Dokuz
        Kuyruklu, Naruto'yu öldürmeye çalıştı ancak Minato ve Kushina
        kendilerini kalkan olarak kullandılar. Son gücüyle Minato, Gerotora'yı
        çağırdı , Naruto üzerinde kullanacağı mührün anahtarını ona verdi ve onu
        Jiraiya'ya gönderdi. Bu arada Kushina, Naruto'ya ailesinin onu ne kadar
        sevdiğini söyledi ve Minato da destekledi. Dokuz Kuyruklu'nun Yang
        yarısını Naruto'ya mühürledi ve Kushina'nın çakrasını mührün içine ördü,
        böylece bir gün Naruto'ya Dokuz Kuyruklu'yu ve çakrasını kontrol etmeyi
        öğrenmesinde yardımcı olabilecekti. [ 30 ] Kendi çakrasından da bir
        kısmını kattı ve mühür kırılmak üzere olduğunda onu eski haline
        getirebilmek için etkinleşecek şekilde programladı. [ 31 ] Üçüncü
        Hokage'yi yakınlarda gören Minato, Konoha köylülerine son bir istekte
        bulundu: Naruto'yu bir kahraman olarak düşünmeleri ve bu kadar çok ölüm
        ve yıkıma neden olan canavarın kabı olarak görmemeleri. [ 32 ] Bunun
        üzerine ruhu Shinigami tarafından tüketildi ve Minato'nun hayatı sona
        erdi.
      </p>

      <h2 className="text-center fw-bold  productsHeader">
        Minato'nun Kişilik
      </h2>
      <p className="text-center">
        Naruto'ya fiziksel olarak benzemesine rağmen, Minato'nun kişiliği hem
        Jiraiya hem de Tsunade tarafından Naruto'nun tam tersi olarak
        değerlendiriliyordu; çok mütevazı ve kendine hakim bir adamdı. Çok
        anlayışlı ve kurnazdı, sebepsiz yere hiçbir şey yapmamasıyla bilinirdi.
        [ 33 ] Ününün rakip köylerde yarattığı dehşetin farkındaydı ve zaman
        zaman bundan faydalanırdı, ancak yine de rakiplerine karşı saygılı
        kalırdı. Çok kibar bir birey olan Minato, başkalarına uygun saygı
        ifadeleriyle hitap ederdi; hatta Orochimaru gibi tehlikeli suçlulara
        bile hitap ederdi . Minato ayrıca, gerekli görmedikçe başkalarının
        kişisel işlerine burnunu sokmazdı [ 34 ] ve kin besleyen biri değildi,
        sadece kendi ve Kushina'nın ölümlerindeki rolüne rağmen Obito'ya
        üzülüyordu ve Kakashi'yi Obito'yu öldürmekten caydırıyordu. [ 35 ]
        Minato, her şeyden önce, birkaç nedenden ötürü ölümünden kendini sorumlu
        tutuyor; Obito'yu onu yozlaştıran kaderden , Konoha'yı ölümünden sonra
        ortaya çıkan zorluklardan [ 36 ] ve hatta kendi oğlu Naruto'yu bir
        jinchūriki yetimi olarak çektiği acı dolu ve zorlu hayattan kurtaramadı.
        [ 37 ] Farklılıklarına rağmen, Naruto babasının kişilik özelliklerinden
        hiçbirine sahip değil: İkisi de yılmaz bir ruha ve hayattaki tüm
        seçimlerinde onları yönlendiren amansız hırslara sahip. Görevler
        dışında, oğlu gibi oldukça kaygısız ve neşeli bir adam. İkisi de
        Konoha'ya ve sevdiklerine -arkadaşlarına ve ailelerine- sarsılmaz bir
        sadakatle bağlı ve bu bağlılık çevrelerindeki herkese ilham veriyor.
        Naruto gibi Minato da sorgulanabilir teknikler yaratma eğilimindeydi;
        ancak Minato'nun durumunda, gerçekten işe yarayan tekniklerden ziyade,
        bulduğu anlamsızca uzun uzadıya isimlerdi. Bu durum, başlangıçta
        Rasengan olarak adlandırılacak olanın adı olarak "Dondurulmuş Tatlı İkiz
        Stil Küresinden Esinlenilmiş Jiraiya'nın Halo Saç Bütünü" olarak
        düşünüldüğünde görüldü.
      </p>

      <h2 className="productsHeader fw-bold">Yetenekler</h2>
      <p>
        Minato, tarihteki en güçlü shinobilerden biriydi. O kadar yetenekli bir
        dâhiydi ki, daha çocukken, Kumogakure'nin köyündeki Jinchūriki'leri
        kaçırmasını engellemesiyle birçok ulus tarafından tanındı ve saygı
        gördü. [ 41 ] Yetişkinliğinde Jiraiya ve Dördüncü Raikage gibi kişiler
        tarafından eşsiz olarak kabul edildi [ 8 ] [ 42 ] ve kuyruklu bir
        canavarla doğrudan dövüşebilen çok az kişiden biri . [ 43 ] Kurama,
        Minato'nun gücünü Hashirama Senju'nunkine benzetti. [ 44 ] Üçüncü
        Shinobi Dünya Savaşı sırasında, düşman shinobilerine onunla
        karşılaşmaları halinde kaçma emirleri verildi. [ 5 ] Animede, tek başına
        bin Iwa -nin'i yok etti — bu başarı Ōnoki'yi bir barış antlaşması kabul
        etmeye zorladı. [ 19 ] Dokuz Kuyrukluların Konoha'ya saldırısı
        sırasında, Tobi ve tilkinin yenilmesi ve köyün yıkımdan kurtarılması
        yalnızca Minato'nun eylemleri sayesinde mümkün oldu. On yıldan fazla bir
        süre sonra, Orochimaru'nun köye yönelik tehdidi giderek artarken,
        Minato'nun o dönemde Sannin'i durdurabilecek tek kişi olduğuna
        inanılıyordu. [ 45 ] Minato'nun dövüş stili, çoğunlukla el mühürleri
        gibi geleneksel zaman alıcı yöntemlerin dışında, aniden ortaya çıkıp
        düşmanları aynı hızla alt etmek üzerine kuruluydu.
      </p>
      <h2 className="productsHeader fw-bold">Ninjutsu</h2>

      <p>
        Minato, Jiraiya tarafından kurbağa çağırmak da dahil olmak üzere birçok
        beceri ve teknik öğrendi ve Kurbağa Patronu Gamabunta'nın tam saygısını
        ve işbirliğini kazanan birkaç kişiden biri oldu . [ 46 ] Bariyer
        ninjutsu konusunda yetenekliydi . [ 47 ] Minato , çakra imzalarını büyük
        mesafelerden tespit edip izleyebilen usta bir sensördü . [ 48 ] Gözetim
        için, parmağını yere koyarak bir alandaki herkesi tespit edebilirdi. [
        49 ] Minato ayrıca , sayıca güç kazanmaktan aldatmaya kadar çeşitli
        savaş stratejileri için Gölge Klon Tekniğini de kullanabilirdi . Minato,
        Yin ve Yang Salınımı ile birlikte Ateş , Rüzgar , Şimşek'in doğa
        dönüşümlerinde ustaydı .
      </p>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th className="productsHeader fw-bold fs-2">Özellik</th>
            <th className="productsHeader fw-bold fs-2">Detay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adı</td>
            <td>Minato Namikaze || ,波風ミナト</td>
          </tr>
          <tr>
            <td>Unvanı</td>
            <td>Dördüncü Hokage</td>
          </tr>
          <tr>
            <td>Doğum Yeri</td>
            <td>Konoha (Konoha no Kiiroi Senkō)</td>
          </tr>
          <tr>
            <td>Ölüm Yeri</td>
            <td>Konoha</td>
          </tr>
          <tr>
            <td>Doğum Tarihi</td>
            <td>25 Ocak</td>
          </tr>
          <tr>
            <td>Öğrencileri</td>
            <td>Jiraiya, Kakashi Hatake</td>
          </tr>
          <tr>
            <td>Özellikleri</td>
            <td>Hız, Hızlı Seyahat, Savaş Stratejisi</td>
          </tr>
          <tr>
            <td>Öne Çıkan Teknikleri</td>
            <td>Hiraishin no Jutsu, Rasengan, Shunshin no Jutsu</td>
          </tr>
          <tr>
            <td>Dış Görünüş</td>
            <td>Altın Saç, Mavi Gözler</td>
          </tr>
          <tr>
            <td>Sözleri</td>
            <td>"Hızlı olmak, düşmanı yenmek için en iyi yoldur."</td>
          </tr>
          <tr>
            <td>Sözleri</td>
            <td>
              "Eğer bir insan ölebileceği bir şey keşfetmemişse, yaşamaya layık
              değildir.
            </td>
          </tr>
          <tr>
            <td>Sözleri</td>
            <td>
              "Aşk uğruna pek çok kez öldüm, ama sevmeseydim asla yaşayamazdım."
            </td>
          </tr>
          <tr>
            <td>Sözleri</td>
            <td>"Ölümden korkmayın, yaşanmamış hayattan korkun."</td>
          </tr>
          <tr>
            <td>Sözleri</td>
            <td>
              "Kendinizi başkalarının gözünde nasıl gördüğünüz önemli değil,
              önemli olan kendinizi nasıl gördüğünüzdür."
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Minato