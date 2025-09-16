import "./App.css";

function App() {
  return (
    <div
      className="
        flex flex-col items-center bg-white py-[200px]
        h-[812px] w-[375px]         /* default (mobile) */
        md:h-[1024px] md:w-[768px]  /* tablet */
        lg:h-[768px] lg:w-[1440px]  /* desktop */
      "
    >
      {" "}
      <div class="w-60 flex flex-wrap items-center gap-6">
        <div class="flex items-center bg-gray-50 px-1.5 py-0.5 rounded-full border border-solid border-neutral-200">
          <span class="font-normal text-xs text-center text-neutral-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-gray-50 px-2 py-0.5 rounded-full border border-solid border-neutral-200">
          <span class="font-normal text-sm text-center text-neutral-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-gray-50 px-2.5 py-1 rounded-full border border-solid border-neutral-200">
          <span class="font-normal text-sm text-center text-neutral-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-red-50 px-1.5 py-0.5 rounded-full border border-solid border-red-200">
          <span class="font-normal text-xs text-center text-red-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-red-50 px-2 py-0.5 rounded-full border border-solid border-red-200">
          <span class="font-normal text-sm text-center text-red-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-red-50 px-2.5 py-1 rounded-full border border-solid border-red-200">
          <span class="font-normal text-sm text-center text-red-600">
            Label
          </span>
        </div>
        <div class="flex items-center bg-amber-50 px-1.5 py-0.5 rounded-full border border-solid border-amber-200">
          <span class="font-normal text-xs text-center text-amber-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-amber-50 px-2 py-0.5 rounded-full border border-solid border-amber-200">
          <span class="font-normal text-sm text-center text-amber-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-amber-50 px-2.5 py-1 rounded-full border border-solid border-amber-200">
          <span class="font-normal text-sm text-center text-amber-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-green-50 px-1.5 py-0.5 rounded-full border border-solid border-green-200">
          <span class="font-normal text-xs text-center text-green-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200">
          <span class="font-normal text-sm text-center text-green-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-green-50 px-2.5 py-1 rounded-full border border-solid border-green-200">
          <span class="font-normal text-sm text-center text-green-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-indigo-50 px-1.5 py-0.5 rounded-full border border-solid border-indigo-200">
          <span class="font-normal text-xs text-center text-indigo-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-indigo-50 px-2 py-0.5 rounded-full border border-solid border-indigo-200">
          <span class="font-normal text-sm text-center text-indigo-700">
            Label
          </span>
        </div>
        <div class="flex items-center bg-indigo-50 px-2.5 py-1 rounded-full border border-solid border-indigo-200">
          <span class="font-normal text-sm text-center text-indigo-700">
            Label
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
