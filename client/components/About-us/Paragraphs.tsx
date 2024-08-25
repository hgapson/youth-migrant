import React from 'react'
import {} from // AcademicCapIcon,
//BriefcaseIcon,
//GlobeAltIcon,
//HeartIcon,
'@heroicons/react/24/outline'
import settled from '../public/settled.jpg'
import reliance from '../public/reliance.jpg'

function Paragraphs() {
  return (
    <div className="mx-auto max-w-6xl bg-gray-100 p-2">
      <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
        Lasting Solutions For Refugees
      </h2>
      <div className="-mx-3 flex flex-wrap">
        {/* Community Integration */}
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <div>
              <img
                src={settled}
                alt="Program 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <h3 className="m-4 text-lg font-semibold md:text-xl">
                Self-reliance
              </h3>
              <p className="text-sm md:text-base">
                Imagine a future where refugees can reach safety, regardless of
                where they’ve fled from or the color of their skin. A future
                where people don’t have to risk their lives in search of a safe
                place to call home. Where they are welcomed with open arms.
                Waikato Refugee Forum is working to make this future a reality.
                <br />
                <br />
                Instead of asking, “how can we feed and shelter more refugees
                longer?” Waikato Refugee Forum asks, “what are the long-term
                solutions that will enable refugees to lead healthy lives and
                become contributing members of society again?” Those are the
                solutions that Waikato Refugee Forum works to expand through our
                three tactics: direct services, field building, and systems
                change. We deal with the solutions side of refugee response
                rather than the emergency assistance side.
                <br />
                <br />
                We partner with refugees who are stuck in the Waikato to which
                they’ve fled on their journey from vulnerability to
                self-reliance. We work with people to determine how they can use
                their skills and resources to reach their goals and we support
                them along the way.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <div>
              <img
                src={reliance}
                alt="Program 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <h3 className="m-4 text-lg font-semibold md:text-xl">
                Resettlement and safety
              </h3>
              <p className="text-sm md:text-base">
                Unfortunately, many refugees face life-threatening danger and
                can’t become self-reliant where they are. We help these people
                relocate to a safe, new country so that they can rebuild their
                lives. To do this, our staff work across Waikato and around New
                Zealand to identify refugees that need help and advocacy. We’ve
                also developed unique programs that reunite refugee families,
                and help people relocate for work and education opportunities.
                <br />
                <br />
                Through our direct service work, we reach refugees who fall
                through the cracks of the humanitarian aid system. We develop
                innovative programs and demonstrate that they work. We then
                collaborate with organizations, the migration and governments to
                scale these solutions to reach refugees around the Waikato.
                <br />
                <br />
                Waikato Refugee Forum has directly assisted over 100,000
                refugees to access resettlement and other pathways to safety and
                has worked in partnership with others to guarantee access for
                thousands more.
                <br />
                <a
                  href="https://www.scw.org.nz/"
                  className="scw text-blue-500 hover:underline"
                >
                  Learn more about our impact
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paragraphs
