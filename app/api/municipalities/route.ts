import { data } from '@/data/data';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let results = data;

  // Filtering by Name (governorate)
  const name = searchParams.get('name');
  if (name) {
    results = results.filter(item => item.Name.toLowerCase().includes(name.toLowerCase()));
  }

  // Filtering by Delegation (delegation name inside Delegations array)
  const delegation = searchParams.get('delegation');
  if (delegation) {
    results = results.map(item => ({
      ...item,
      Delegations: item.Delegations.filter(d => d.Name.toLowerCase().includes(delegation.toLowerCase()))
    })).filter(item => item.Delegations.length > 0);
  }

  // Filtering by PostalCode (delegation postal code)
  const postalCode = searchParams.get('postalCode');
  if (postalCode) {
    results = results.map(item => ({
      ...item,
      Delegations: item.Delegations.filter(d => d.PostalCode === postalCode)
    })).filter(item => item.Delegations.length > 0);
  }

  // Sorting by Name (governorate) alphabetically or by NameAr (Arabic name)
  const sortingField = searchParams.get('sort');
  const sortOrder = searchParams.get('order') || 'asc';
  if (sortingField) {
    if (sortingField === 'name') {
      results = results.sort((a, b) => {
        const fieldA = a.Name.toLowerCase();
        const fieldB = b.Name.toLowerCase();
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
      });
    }
    else if (sortingField === 'nameAr') {
      results = results.sort((a, b) => {
        const fieldA = a.NameAr.toLowerCase();
        const fieldB = b.NameAr.toLowerCase();
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB,"ar") : fieldB.localeCompare(fieldA,"ar");
      });
    }
  }
  return NextResponse.json(results);
}