
export interface Photo {
  id: string;
  url: string;
}

export interface Album {
  id: string;
  title: string;
  coverUrl: string;
  categoryId: string;
  photos: Photo[];
}

export interface Category {
  id: string;
  name: string;
}

export type ViewType = 'HOME' | 'GALLERY' | 'DETAIL' | 'ADMIN';
