import 'dart:convert';

class ProductModel {
  String? id;
  String? title;
  String? titleKh;
  String? description;
  double? price;
  double? originalPrice;
  int? discount;
  String? category;
  String? variant;
  List<String>? images;
  bool? inStock;
  bool? isNew;

  ProductModel({
    this.id,
    this.title,
    this.titleKh,
    this.description,
    this.price,
    this.originalPrice,
    this.discount,
    this.category,
    this.variant,
    this.images,
    this.inStock,
    this.isNew,
  });

  ProductModel copyWith({
    String? id,
    String? title,
    String? titleKh,
    String? description,
    double? price,
    double? originalPrice,
    int? discount,
    String? category,
    String? variant,
    List<String>? images,
    bool? inStock,
    bool? isNew,
  }) => ProductModel(
    id: id ?? this.id,
    title: title ?? this.title,
    titleKh: titleKh ?? this.titleKh,
    description: description ?? this.description,
    price: price ?? this.price,
    originalPrice: originalPrice ?? this.originalPrice,
    discount: discount ?? this.discount,
    category: category ?? this.category,
    variant: variant ?? this.variant,
    images: images ?? this.images,
    inStock: inStock ?? this.inStock,
    isNew: isNew ?? this.isNew,
  );

  String toRawJson() => json.encode(toJson());

  factory ProductModel.fromJson(Map<String, dynamic> json) => ProductModel(
    id: json["id"],
    title: json["title"],
    titleKh: json["titleKh"],
    description: json["description"],
    price: json["price"]?.toDouble(),
    originalPrice: json["originalPrice"]?.toDouble(),
    discount: json["discount"],
    category: json["category"],
    variant: json["variant"],
    images: json["images"] == null ? [] : List<String>.from(json["images"]!.map((x) => x)),
    inStock: json["inStock"],
    isNew: json["isNew"],
  );

  Map<String, dynamic> toJson() => {
    "id": id,
    "title": title,
    "titleKh": titleKh,
    "description": description,
    "price": price,
    "originalPrice": originalPrice,
    "discount": discount,
    "category": category,
    "variant": variant,
    "images": images == null ? [] : List<dynamic>.from(images!.map((x) => x)),
    "inStock": inStock,
    "isNew": isNew,
  };
}
