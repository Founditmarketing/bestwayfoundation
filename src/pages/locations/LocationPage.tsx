import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

/**
 * Renders the location page for /service-areas/:slug.
 * Unknown slugs fall back to the service areas index rather than a blank page.
 */
export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug);

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  return <LocationTemplate location={location} />;
}
