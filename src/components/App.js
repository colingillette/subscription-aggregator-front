import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Skeleton from "react-loading-skeleton";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Favorites from "./favorites/Favorites";
import Queue from "./queue/Queue";
import Search from "./search/Search";
import PageNotFound from "./common/PageNotFound";

export default function App() {
  return (
    <div>
      {typeof window !== "undefined" ? (
        <BrowserRouter>
          <Header />
          <div className="container p-5">
            <Routes>
              <Route path="/" element={<Queue />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      ) : (
        <Skeleton count={10} />
      )}
    </div>
  );
}
