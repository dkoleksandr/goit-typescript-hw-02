import { useEffect, useState } from "react";
import "./App.css";
import { getSearchApi } from "./api/search-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Photo } from "./components/photoTypes";

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);

        const data: Photo[] = await getSearchApi(query, page);
        setPhotos((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && fetchData();
  }, [page, query]);

  const handleSearch = (searchQuery: string): void => {
    setQuery(searchQuery);
  };
  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (image: Photo): void => {
    setSelectedPhoto(image);
  };

  const closeModal = (): void => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={openModal} />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}

      <ImageModal
        isOpen={Boolean(selectedPhoto)}
        onRequestClose={closeModal}
        photoForModal={selectedPhoto!}
      />
    </>
  );
};

export default App;
