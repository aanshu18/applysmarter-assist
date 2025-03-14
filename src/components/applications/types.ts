
export interface Application {
  id: string;
  company: string;
  position: string;
  status: 'applied' | 'wishlist' | 'interview' | 'offer' | 'rejected';
  date: string;
  logo: string;
}

export const statusColors = {
  applied: 'bg-blue-500 hover:bg-blue-600',
  wishlist: 'bg-purple-500 hover:bg-purple-600',
  interview: 'bg-amber-500 hover:bg-amber-600',
  offer: 'bg-green-500 hover:bg-green-600',
  rejected: 'bg-red-500 hover:bg-red-600',
};

export const statusLabels = {
  applied: 'Applied',
  wishlist: 'Wishlist',
  interview: 'Interview',
  offer: 'Offer',
  rejected: 'Rejected',
};

export const mockApplications: Application[] = [
  {
    id: '1',
    company: 'Google',
    position: 'Frontend Developer',
    status: 'applied',
    date: '2023-09-15',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
  },
  {
    id: '2',
    company: 'Microsoft',
    position: 'Software Engineer',
    status: 'interview',
    date: '2023-09-12',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
  },
  {
    id: '3',
    company: 'Amazon',
    position: 'Full Stack Developer',
    status: 'wishlist',
    date: '2023-09-10',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  },
  {
    id: '4',
    company: 'Apple',
    position: 'UI Developer',
    status: 'offer',
    date: '2023-09-05',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
  },
  {
    id: '5',
    company: 'Netflix',
    position: 'React Developer',
    status: 'rejected',
    date: '2023-09-01',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
  },
];
