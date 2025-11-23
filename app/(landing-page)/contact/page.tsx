"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { useContact } from "@/hooks";
import Button from "@/components/UI/Button";

export default function ContactForm() {
  const { mutate: sendContact, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    sendContact(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact us</h1>
          <p className="text-gray-600">
            Have a question or need support? Reach out to us and we&apos;ll get
            back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                First & Last Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                placeholder="John Doe"
                className={`focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 ${
                  errors.firstName ? "border-primary" : "border-gray-300"
                }`}
                disabled={isPending}
              />
              {errors.firstName && (
                <p className="text-primary mt-1 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="john@mail.com"
                className={`focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 ${
                  errors.email ? "border-primary" : "border-gray-300"
                }`}
                disabled={isPending}
              />
              {errors.email && (
                <p className="text-primary mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="+234-567-7890"
                className={`focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 ${
                  errors.phone ? "border-primary" : "border-gray-300"
                }`}
                disabled={isPending}
              />
              {errors.phone && (
                <p className="text-primary mt-1 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                placeholder="I need a help"
                className={`focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 ${
                  errors.subject ? "border-primary" : "border-gray-300"
                }`}
                disabled={isPending}
              />
              {errors.subject && (
                <p className="text-primary mt-1 text-sm">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Type you message"
              rows={5}
              className={`focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 ${
                errors.message ? "border-primary" : "border-gray-300"
              }`}
              disabled={isPending}
            />
            {errors.message && (
              <p className="text-primary mt-1 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            whileHover={{ scale: isPending ? 1 : 1.02 }}
            whileTap={{ scale: isPending ? 1 : 0.98 }}
            type="submit"
            disabled={isPending}
            size="lg"
          >
            {isPending ? "Sending..." : "Send"}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
