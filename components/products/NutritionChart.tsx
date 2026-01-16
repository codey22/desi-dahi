'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface NutritionChartProps {
    nutrition: {
        [key: string]: number | undefined;
    };
}

export default function NutritionChart({ nutrition }: NutritionChartProps) {
    const nutritionEntries = Object.entries(nutrition).filter(([_, value]) => value !== undefined);

    if (nutritionEntries.length === 0) return null;

    const maxValue = Math.max(...nutritionEntries.map(([_, value]) => value as number));

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Card className="p-8">
                <h3 className="text-3xl font-bold text-desi-maroon mb-6">
                    Nutrition Facts
                </h3>
                <p className="text-gray-600 mb-6">Per 100g serving</p>

                <div className="space-y-4">
                    {nutritionEntries.map(([key, value], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-gray-700 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-lg font-bold text-desi-brown">
                                    {value}
                                    {key === 'calories' ? ' kcal' : 'g'}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${((value as number) / maxValue) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                                    className="h-full bg-gradient-to-r from-desi-saffron to-desi-yellow rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Card>
        </motion.div>
    );
}
