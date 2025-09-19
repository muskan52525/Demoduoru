// src/components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/form";

const PINK = "#E64C73";
const GREEN = "#86B038";

export default function ProductDetail({ product: productProp }) {
  const params = useParams();
  const idFromRoute = params?.id ? Number(params.id) : null;

  const product =
    productProp ?? products.find((p) => p.id === idFromRoute) ?? products[0];

  if (!product) return null;

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-25">
      <ProductDecor decor={product.decor} />
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-0">
        {/* Content */}
        <div
          className=" grid items-start gap-12 lg:gap-18
    md:grid-cols-[420px_1fr]
    xl:grid-cols-[440px_1fr]"
        >
          {/* LEFT: image + storage */}
          <div>
            <img
              src={product.img}
              alt={product.name}
              className="w-auto h-[240px] sm:h-[280px] lg:h-[450px] object-contain mx-auto"
            />

            <div
              className="mt-8 rounded-[28px] bg-white p-5 sm:p-7 lg:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2"
              style={{ borderColor: PINK }}
            >
              {/* definition list = perfect semantics for label + description */}
              <dl className="space-y-5 sm:space-y-6 ">
                {Object.entries(product.storage ?? {}).map(([label, text]) => (
                  <div key={label} className="mb-3">
                    {/* Pink heading */}
                    <dt
                      className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium font-mono45 uppercase tracking-wide"
                      style={{ color: PINK }}
                    >
                      {label}
                    </dt>

                    {/* Description */}
                    <dd className="mt-1 text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed text-slate-900">
                      {String(text)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* RIGHT: characteristics + calendar + button */}
          <div>
            <div className="flex-1 lg:flex gap-10">
              {/* Title */}
              <h1
                className="text-[34px] sm:text-[42px] lg:text-[56px] font-medium font-mono45 uppercase mb-8 lg:mb-10 tracking-wide"
                style={{ color: PINK }}
              >
                {product.name}
              </h1>
              {product.cat && (
                <h1
                  className="text-22px font-medium font-mono45 uppercase mb-8 lg:mb-10 tracking-wide self-center border-1 rounded-2xl p-4"
                  style={{ color: PINK }}
                >
                  {product.cat}
                </h1>
              )}
            </div>
            <div
              className="rounded-2xl px-5 py-6 sm:px-7 sm:py-7 mb-8 lg:mb-10 text-white"
              style={{ backgroundColor: PINK }}
            >
              <div className="space-y-4 sm:space-y-5">
                {(product.characteristics || []).map((c) => (
                  <CharLine key={c.label} label={c.label} value={c.value} />
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl px-5 py-6 sm:px-7 sm:py-7 text-white font-poppins"
              style={{ backgroundColor: GREEN }}
            >
              <Calendar
                months={product.calendar?.months}
                plantacao={product.calendar?.plantacao}
                colheita={product.calendar?.colheita}
                disponibilidade={product.calendar?.disponibilidade}
              />
            </div>

            <div className="mt-8 grid justify-end">
              <button
                type="button"
                onClick={() => window.location.href = "/products"}
                className="mx-auto block rounded-lg border-2 cursor-pointer px-5 py-2 text-[12px] sm:text-[13px] font-medium font-mono45 uppercase tracking-wider hover:bg-black hover:text-white transition"
              > 
                Ver outros produtos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small parts ---------- */

function CharLine({ label, value }) {
  return (
    <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[130px_1fr] items-center ">
      
      <div className="relative h-7 flex items-center py-2">
        <span className="absolute inset-x-0 top-2/2 -translate-y-1/2 h-[2px] bg-white/80 my-2" />
        
        <span className="absolute -left-3 top-2/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white my-2" />

        <span className="relative z-[1] text-[12px] sm:text-[13px] font-bold uppercase tracking-wide font-poppins">
          {label}
        </span>
      </div>

      {/* RIGHT: long segment with value riding on it */}
      <div className="relative h-7 flex items-center">
        <span className="absolute inset-x-0 top-2/2 -translate-y-1/2 h-[2px] bg-white/80 my-2" />

        <span className="absolute -left-2 top-2/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white my-2" />

        <span className="relative ml-5 text-[12px] sm:text-[14px] leading-none font-poppins">
          {value}
        </span>
      </div>
    </div>
  );
}

function Calendar({
  months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ],
  plantacao,
  colheita,
  disponibilidade,
}) {
  return (
    <div className="space-y-4">
      <div className="pl-28 sm:pl-32">
        <div className="grid grid-cols-12 gap-1 text-[10px] sm:text-[11px] opacity-90">
          {months.map((m) => (
            <span key={m} className="text-center">
              {m}
            </span>
          ))}
        </div>
      </div>

      <Row label="PLANTAÇÃO" months={months} data={plantacao} />
      <Row
        label="COLHEITA"
        months={months}
        data={colheita}
        activeColor="#F53D6C"
      />
      <Row label="DISPONIBILIDADE" months={months} data={disponibilidade} />
    </div>
  );
}

function Row({ label, months, data, activeColor = "rgba(255,255,255,0.95)" }) {
  return (
    <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-center h-9">
      {/* LEFT: label with short underline + two dots */}
      <div className="relative h-7 flex items-center">
        <span className="absolute inset-x-0 top-2/2 -translate-y-1/2 h-[2px] bg-white/85 my-2" />
        <span className="absolute -left-3 top-2/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white my-2" />
        <span className="relative z-[1] text-[12px] sm:text-[13px] font-bold uppercase font-poppins">
          {label}
        </span>
      </div>

      {/* RIGHT: long underline + two dots + content */}
      <div className="relative h-7 flex items-center">
        <span className="absolute inset-x-0 top-2/2 -translate-y-1/2 h-[2px] bg-white/70 my-2" />
        <span className="absolute -left-4 top-2/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white my-2" />

        {data?.naoAplica ? (
          <span className="relative z-[1] text-[12px] sm:text-[13px]">
            não se aplica
          </span>
        ) : (
          <div className="relative z-[1] grid grid-cols-12 gap-2 w-full">
            {months.map((_, i) => {
              const isActive = data?.active?.includes(i);
              return (
                <span
                  key={i}
                  className={
                    "h-[10px] sm:h-[12px] rounded-full border " +
                    (isActive
                      ? "bg-[var(--pink)] border-transparent"
                      : "bg-transparent border-white/80")
                  }
                  style={{ ["--pink"]: activeColor }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
function ProductDecor({ decor }) {
  if (!decor) return null;
  const { topLeft, topRight, bottomLeft } = decor;

  return (
    <>
      {/* top-left */}
      {topLeft && (
        <img
          src={topLeft}
          alt=""
          className="pointer-events-none select-none hidden lg:block md:block
                     absolute top-50 left-0 w-[120px] lg:w-[280px] "
        />
      )}

      {/* top-right */}
      {topRight && (
        <img
          src={topRight}
          alt=""
          className="pointer-events-none select-none  hidden lg:block md:block
                     absolute top-50 right-0 w-[120px] lg:w-[250px] "
        />
      )}

      {/* bottom-left */}
      {bottomLeft && (
        <img
          src={bottomLeft}
          alt=""
          className="pointer-events-none select-none hidden lg:block md:block
                     absolute -bottom-80 left-0 w-[140px] lg:w-[240px] "
        />
      )}
    </>
  );
}

