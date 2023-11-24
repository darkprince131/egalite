import nginx from '@/public/images/nginx_egalite.png'
import f5 from '@/public/images/f5_egalite.png'
import broadcom from '@/public/images/broadcom_egalite.png'

export default function LogosHolder() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <img className="w-30 h-16 mb-4" src={nginx.src} />
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <img className="w-30 h-16 mb-4" src={f5.src} />
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <img className="w-30 h-16 mb-4" src={broadcom.src} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
