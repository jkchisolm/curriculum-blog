import { NextResponse } from "next/server";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

export const GET = async () => {
  try {
    const categories = await getCategories();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

async function getCategories() {
  const categoriesCol = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCol);
    const categoriesList = categoriesSnapshot.docs.map((doc) => doc.data());
    console.log(categoriesList);
    return categoriesList;
}
