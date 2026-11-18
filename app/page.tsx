"use client";
export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_35%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-white/70 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                NEW • FOR BUSINESSES RUNNING GOOGLE ADS
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Every Google Ads Lead{" "}
                <span className="bg-gradient-to-r from-white via-white to-white/65 bg-clip-text text-transparent">
                  Called in Under 2 Minutes.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Typical callback:
1m 42s
              </p>
<div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
  {[
    "Lead received",
    "AI calling",
    "Appointment booked",
  ].map((item, index) => (
    <div
      key={item}
      className="animate-pulse rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 backdrop-blur-xl"
      style={{ animationDelay: `${index * 300}ms` }}
    >
      <span className="mr-2 text-emerald-300">✓</span>
      {item}
    </div>
  ))}
</div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="tel:+442045720272" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]">
                  Experience the Live Demo
                </a>
                <a href="https://api.leadconnectorhq.com/widget/booking/SuJF7zuSUQtysLGaeDUL" className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:bg-white/8">
                  Schedule a 30 Minute Call
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/55">
                {[
                  "Solar companies",
                  "Roofers",
                  "Builders",
                  "Electricians",
                  "Plumbers",
                  "Financial advisers",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-cyan-400/10 via-transparent to-emerald-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Lead response timeline
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/80">
                      New enquiry to first contact
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Live in under 2 min
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      time: "0:00",
                      title: "Lead form submitted",
                      text: "A prospect lands on your website and requests a quote.",
                    },
                    {
                      time: "0:20",
                      title: "AI calls the customer",
                      text: "The enquiry is routed and prioritised in real time.",
                    },
                    {
                      time: "1:10",
                      title: "Lead answers",
                      text: "The lead is contacted while intent is highest.",
                    },
                    {
                      time: "2:00",
                      title: "Appointment booked",
                      text: "The enquiry is qualified and booked into your calendar.",
                      },
                    {
                      time: "2:10",
                      title: "Confirmation SMS sent",
                      text: "The customer gets confirmation and your team receives the full summary.",
                    },
                  ].map((step, index) => (
                    <div
                      key={step.time}
                      className="group relative rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/[0.05]"
                    >
                      {index !== 3 && (
                        <div className="absolute left-[27px] top-14 h-10 w-px bg-gradient-to-b from-cyan-300/60 to-transparent" />
                      )}

                      <div className="flex gap-4">
                        <div className="relative flex flex-col items-center">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 text-[10px] font-semibold text-cyan-200">
                            {index + 1}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h2 className="text-sm font-semibold text-white">
                              {step.title}
                            </h2>
                            <span className="text-xs font-medium text-white/45">
                              {step.time}
                            </span>
                          </div>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Best for
                    </p>
                    <p className="mt-2 text-sm text-white/78">
                      Trades, home services, advisers
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Traffic source
                    </p>
                    <p className="mt-2 text-sm text-white/78">
                      Google Ads and high-intent leads
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-white/78">
                      More booked jobs and demos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="border-t border-white/10 bg-[#07090d] px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">

    <div className="text-center max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
        Why speed matters
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        The first company to respond usually has the advantage.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/60">
        When someone submits a quote request they're actively looking for help.
        If nobody contacts them quickly, they often move on to the next company.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* WITHOUT AI */}

      <div className="rounded-[2rem] border border-red-500/20 bg-red-500/5 p-8">

        <div className="mb-6 inline-flex rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-300">
          WITHOUT SPEED-TO-LEAD
        </div>

        <div className="space-y-6">

          {[
            ["09:00","Lead submits website form"],
            ["09:35","Office finally calls back"],
            ["09:37","No answer"],
            ["09:45","Customer already booked elsewhere"],
          ].map(([time,text])=>(
            <div key={time} className="flex gap-5">

              <div className="w-20 shrink-0 text-red-300 font-semibold">
                {time}
              </div>

              <div className="text-white/70">
                {text}
              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 rounded-2xl bg-red-500/10 p-5 text-red-200">
          ❌ Great lead.
          <br/>
          Lost simply because nobody called quickly enough.
        </div>

      </div>

      {/* WITH AI */}

      <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/5 p-8">

        <div className="mb-6 inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
          WITH AI SPEED-TO-LEAD
        </div>

        <div className="space-y-6">

          {[
            ["09:00","Lead submits website form"],
            ["09:01","AI calls immediately"],
            ["09:03","Appointment booked"],
            ["09:04","Team notified automatically"],
          ].map(([time,text])=>(
            <div key={time} className="flex gap-5">

              <div className="w-20 shrink-0 text-emerald-300 font-semibold">
                {time}
              </div>

              <div className="text-white/70">
                {text}
              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 rounded-2xl bg-emerald-500/10 p-5 text-emerald-200">
          ✅ Customer contacted while intent is highest.
          <br/>
          Your team can focus on the appointment instead of chasing the lead.
        </div>

      </div>

    </div>

  </div>
</section>
     <section className="relative overflow-hidden border-t border-white/10 bg-neutral-950 px-6 py-32 sm:px-8 lg:px-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.12),transparent_32%)]" />

  <div className="relative mx-auto max-w-7xl text-center">
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Live pipeline view
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Watch the lead move from enquiry to booked appointment.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        Every form submission creates a visible trail: call status, qualification,
        booking outcome, notes and follow-up activity.
      </p>
    </div>

    <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40">
            Pipeline
          </p>
          <p className="mt-2 text-sm font-medium text-white/80">
            Google Ads Lead Response
          </p>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Live workflow active
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {[
          ["New lead", "Form submitted", "Customer requested a quote"],
          ["AI calling", "Call started", "Outbound call triggered"],
          ["Qualified", "Intent confirmed", "Service, urgency and postcode captured"],
          ["Booked", "Appointment set", "Wednesday at 4:00pm"],
          ["Follow-up", "SMS sent", "Customer and team notified"],
        ].map(([stage, status, detail], index) => (
          <div key={stage} className="relative rounded-3xl border border-white/10 bg-black/25 p-5">
            <div className="mb-5 h-3 w-3 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">
              Stage {index + 1}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{stage}</h3>
            <p className="mt-3 text-sm font-medium text-white/70">{status}</p>
            <p className="mt-2 text-sm leading-6 text-white/45">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="relative border-t border-white/10 bg-neutral-950 px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        The journey
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        From paid click to booked appointment.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        The moment someone submits your form, the system starts working:
        calling, qualifying, booking and updating your team automatically.
      </p>
    </div>
    <div className="mt-14 grid gap-5 lg:grid-cols-5">
      {[
        {
          label: "01",
          title: "Form submitted",
          text: "A lead requests a quote from your Google Ads landing page.",
        },
        {
          label: "02",
          title: "AI call starts",
          text: "The customer receives a call while they are still interested.",
        },
        {
          label: "03",
          title: "Lead qualified",
          text: "The AI confirms service type, urgency, postcode and intent.",
        },
        {
          label: "04",
          title: "Appointment booked",
          text: "A suitable time is offered and confirmed automatically.",
        },
        {
          label: "05",
          title: "CRM updated",
          text: "Call recording, transcript, summary and next steps are logged.",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition group-hover:opacity-100" />

          <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
            {item.label}
          </div>

          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 sm:px-8 lg:px-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.1),transparent_28%)]" />

  <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
        The hidden leak
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        You are not just losing leads. You are losing the clicks you already paid for.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        Most service businesses track ad spend, clicks and form submissions. Very few track what happens next: how quickly somebody actually speaks to the lead.
      </p>

      <p className="mt-4 text-lg leading-8 text-white/60">
        If a customer fills in your form and waits too long for a call, they often contact the next company. The lead looked good in the dashboard, but the opportunity was already gone.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      {[
        {
          metric: "£",
          title: "Paid click wasted",
          text: "The enquiry came from paid traffic, but nobody reached the lead while intent was high.",
        },
        {
          metric: "5 min",
          title: "The response window",
          text: "The faster a lead gets a real conversation, the better the chance of booking the appointment.",
        },
        {
          metric: "24/7",
          title: "Enquiries do not wait",
          text: "Evenings and weekends are often when customers research high-value services.",
        },
        {
          metric: "0",
          title: "No manual chasing",
          text: "The system keeps following up until the lead answers, books, or opts out.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <div className="text-3xl font-semibold tracking-[-0.04em] text-white">
            {item.metric}
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative border-t border-white/10 bg-neutral-950 px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Full visibility
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Every call, answer and appointment logged automatically.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        Your team does not just get a notification. They get the full context:
        what the lead asked for, what the AI discussed, whether an appointment
        was booked, and what needs to happen next.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-cyan-400/10 via-transparent to-emerald-400/10 blur-2xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              CRM record
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">
              New website enquiry
            </p>
          </div>

          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Appointment booked
          </span>
        </div>

        <div className="mt-5 grid gap-4">
          {[
            ["Lead name", "Matthew Carter"],
            ["Service", "Solar quote"],
            ["Source", "Google Ads landing page"],
            ["Callback time", "1 min 18 sec"],
            ["Appointment", "Wednesday at 4:00pm"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <span className="text-sm text-white/45">{label}</span>
              <span className="text-sm font-medium text-white/80">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              Call summary
            </p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Customer owns the property, wants to reduce energy bills, and is
              open to a home survey this week.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              Team notified
            </p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Sales team receives the booked appointment, call recording,
              transcript and customer details.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 sm:px-8 lg:px-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_32%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
        The AI conversation
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        It does not just call. It qualifies, books and confirms.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        The call feels simple for the customer, but behind the scenes it is
        collecting the information your team needs to act quickly.
      </p>
    </div>

    <div className="mx-auto mt-14 max-w-4xl space-y-4">
      {[
        {
          speaker: "AI Assistant",
          badge: "Call starts",
          message:
            "Hi, is this Matthew? I am calling from Bright Solar. You requested a free solar quote a moment ago. Have you got a quick minute?",
          align: "left",
        },
        {
          speaker: "Customer",
          badge: "Answers",
          message: "Yes, sure.",
          align: "right",
        },
        {
          speaker: "AI Assistant",
          badge: "Qualifies",
          message:
            "Great. Just so I can point the team in the right direction, do you own the property you are looking to put solar on?",
          align: "left",
        },
        {
          speaker: "Customer",
          badge: "Confirms",
          message: "Yes, I do.",
          align: "right",
        },
        {
          speaker: "AI Assistant",
          badge: "Books",
          message:
            "Perfect. The easiest next step is a free home survey. I have Wednesday at 2pm or 4pm available. Would either of those work for you?",
          align: "left",
        },
        {
          speaker: "Customer",
          badge: "Chooses time",
          message: "Wednesday at 4pm works.",
          align: "right",
        },
        {
          speaker: "AI Assistant",
          badge: "Confirms",
          message:
            "Great, you are booked for Wednesday at 4pm. You will receive a confirmation text shortly with the details.",
          align: "left",
        },
      ].map((item) => (
        <div
          key={item.badge + item.message}
          className={`flex ${
            item.align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-2xl rounded-3xl border p-5 backdrop-blur-xl ${
              item.align === "right"
                ? "border-emerald-300/20 bg-emerald-300/10"
                : "border-white/10 bg-white/[0.05]"
            }`}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-sm font-semibold text-white">
                {item.speaker}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  item.align === "right"
                    ? "bg-emerald-300/10 text-emerald-200"
                    : "bg-cyan-300/10 text-cyan-200"
                }`}
              >
                {item.badge}
              </span>
            </div>

            <p className="text-sm leading-7 text-white/68">{item.message}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
      {[
        "Questions answered",
        "Lead qualified",
        "Appointment booked",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center text-sm font-medium text-white/75"
        >
          ✓ {item}
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative border-t border-white/10 bg-neutral-950 px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Built for service businesses
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Especially useful when every enquiry has real value.
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        If one booked job, survey, consultation or project is worth hundreds or
        thousands of pounds, speed-to-lead quickly becomes a commercial advantage.
      </p>
    </div>

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: "☀️",
          title: "Solar installers",
          text: "Call quote requests while the customer is still comparing options.",
        },
        {
          icon: "🏠",
          title: "Roofing companies",
          text: "Capture urgent repair and replacement enquiries before competitors.",
        },
        {
          icon: "🧱",
          title: "Builders",
          text: "Qualify extensions, renovations and larger project enquiries faster.",
        },
        {
          icon: "🔥",
          title: "Heating engineers",
          text: "Respond quickly to boiler, heat pump and servicing enquiries.",
        },
        {
          icon: "⚡",
          title: "Electricians",
          text: "Turn website forms into booked surveys, quotes and call-backs.",
        },
        {
          icon: "🚿",
          title: "Plumbers",
          text: "Prioritise urgent jobs and capture customer details automatically.",
        },
        {
          icon: "💼",
          title: "Financial advisers",
          text: "Follow up new advice enquiries before intent drops.",
        },
        {
          icon: "🏥",
          title: "Clinics",
          text: "Convert private treatment enquiries into booked consultations.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-2xl">
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-white">{item.title}</h3>

          <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 sm:px-8 lg:px-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.16),transparent_34%)]" />

  <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
        Try the demo
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Want to see what your customers would experience?
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/60">
        Pick a time below and we’ll show you how a new enquiry can be
        called, qualified and moved towards an appointment automatically.
      </p>

      <div className="mt-8 space-y-4 text-sm text-white/65">
        <p>✓ See the callback flow in action</p>
        <p>✓ Understand how the lead is qualified</p>
        <p>✓ See what gets logged inside the CRM</p>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-cyan-400/10 via-transparent to-emerald-400/10 blur-2xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-white/40">
            Demo request
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
            Book a 30 minute walkthrough
          </h3>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/SuJF7zuSUQtysLGaeDUL"
            title="Book a 30 minute walkthrough with Futura Digital"
            className="block h-[760px] w-full border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-center text-xs leading-5 text-white/40">
          Calendar not showing?{" "}
          <a href="https://api.leadconnectorhq.com/widget/booking/SuJF7zuSUQtysLGaeDUL" className="underline hover:text-white">
            Open it in a new page
          </a>{" "}
          or ring our AI receptionist on{" "}
          <a href="tel:+442045720272" className="underline hover:text-white">
            +44 20 4572 0272
          </a>
          .
        </p>

        <p className="mt-2 text-center text-xs leading-5 text-white/40">
          No spam. No hard sell. Just a practical walkthrough of how the system
          could work for your business.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden border-t border-white/10 bg-[#050608] px-6 py-24 sm:px-8 lg:px-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_34%)]" />

  <div className="relative mx-auto max-w-4xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
      Ready to protect your paid leads?
    </p>

    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
      Stop paying for enquiries that never turn into conversations.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
      See how Futura Digital can help your business call new website leads,
      qualify them and move them towards booked appointments automatically.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href="tel:+442045720272" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]">
        Experience the Live Demo
      </a>

      <a href="https://api.leadconnectorhq.com/widget/booking/SuJF7zuSUQtysLGaeDUL" className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-sm font-medium text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/8">
        Schedule a 30 Minute Call
      </a>
    </div>
  </div>
</section>

<footer className="border-t border-white/10 bg-black px-6 py-10 sm:px-8 lg:px-12">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
    <p>© 2026 Futura Digital. Speed-to-lead systems for service businesses.</p>
    <div className="flex gap-5">
      <a href="mailto:info@futuradigital.app" className="hover:text-white">
        info@futuradigital.app
      </a>
      <a href="https://api.leadconnectorhq.com/widget/booking/SuJF7zuSUQtysLGaeDUL" className="hover:text-white">
        Book a call
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}