'use client';

import { ApolloProvider as AP } from '@apollo/client/react';
import { apolloClient } from '@/lib/apollo-client';
import { ReactNode } from 'react';

export default function ApolloProvider({ children }: { children: ReactNode }) {
  return <AP client={apolloClient}>{children}</AP>;
}
